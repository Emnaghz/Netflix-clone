const tmdb = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${tmdb}&with_network=213`,
    fetchActionMovies: `/discover/movie?api_key=${tmdb}&with_genres=28` ,
    fetchTopRated: `movie/top_rated?api_key=${tmdb}&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${tmdb}&with_genres=10749`,
    fetchComedyMovies: `/discover/movie?api_key=${tmdb}&with_genres=35`
}

export default requests;