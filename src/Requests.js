const tmdb = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${tmdb}&with_network=213`,
    fetchActionMovies: `` ,
    fetchTopRated: ``,
    fetchRomanceMovies: ``,
    fetchComedyMovies: ``
}

export default requests;