import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./banner.css"
import request, { apiKey } from '../request'; // ✅ Make sure apiKey is exported separately

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [backdrop, setBackdrop] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        // Step 1: Fetch horror movie list
        const listResponse = await axios.get(request.fetchHorrorMovies);
        const titles = listResponse.data.titles;

        if (!titles || titles.length === 0) {
          console.warn('No titles found');
          return;
        }
        let selectedMovie = null;

        // Try random movies until we find one with a backdrop
        for (let i = 0; i < titles.length; i++) {
          const randomIndex = Math.floor(Math.random() * titles.length);
          const titleId = titles[randomIndex].id;

          const detailsResponse = await axios.get(
            `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${apiKey}`
          );

          const movieDetails = detailsResponse.data;

          if (movieDetails.backdrop) {
            selectedMovie = movieDetails;
            break; // ✅ stop as soon as we get one with a backdrop
          }
        }

        if (selectedMovie) {
          setMovie(selectedMovie);
          setBackdrop(selectedMovie.backdrop);
        } else {
          console.warn('No valid movie with backdrop found.');
        }

      } catch (err) {
        console.error('Error fetching movie/banner:', err);
      }
    }

    fetchData();
  }, []);


  return (
    <div className='b'>
  <header className='banner'
  style={{
    backgroundSize:'cover',
    backgroundImage:`url("${backdrop}")` ,
    backgroundPosition:"center-center"
  }}>

    <div className='banner-content'>
      <h1 className='banner_title'>
        {movie?.title || movie?.name || movie?.original_title}
      </h1>

      <div className='banner_buttons'>
        <button className='banner_button'>Play</button>
        <button className='banner_button'>My list</button>
      </div>

   
          <h1 className='banner_description'>{movie?.plot_overview}</h1>


    </div>
              <div className='banner_fade-bottom'></div>
  </header>


    </div>
  )
}

export default Banner