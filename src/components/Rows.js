import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Rows.css'
// import { apiKey } from '../request'
const Rows = ({title, fetch_url}) => {


  const [movies, setMovies]= useState([])

  //  console.log('movies', movies[0])
  useEffect(()=>
  {
       async function fetchData() {
        const request= await axios.get(fetch_url)
        const response= request.data.releases
        const shuffled= response.filter(movie=>movie.poster_url).sort(()=>0.5-Math.random()).slice(0,20)
        setMovies(shuffled)
        
       } fetchData()
  }, [fetch_url])
  return (
    <div className='row'>
         <h2>{title}</h2>
         <div className='row_posters'>
        
          {movies?.map(movie=>{
            return(
                      <img key={movie.id} className='row_poster' src={`${movie?.poster_url}`}  alt={movie.title}/>
            )

           })}
         </div>
      

    </div>
  )
}

export default Rows