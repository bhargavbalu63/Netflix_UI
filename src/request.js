
export const apiKey = "vZmRcJuve7D1EsqEnBO4QPJjLfhx18xbE7uCrgGR";

const request = {
 
  
  fetchHorrorMovies: `https://api.watchmode.com/v1/list-titles?apiKey=${apiKey}&genres=5&types=movie&limit=20`,
  fetchReleases:`https://api.watchmode.com/v1/releases/?apiKey=${apiKey}`
};

export default request;

