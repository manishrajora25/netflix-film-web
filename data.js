
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const base_url = "https://api.themoviedb.org/3";
export const API_KEY = "3f3ff7f9ac3678f8e507ee0e1f6c7fa1";

export const VIDEO_URL= "https://www.youtube.com/watch?v=";
export const requests = {
    originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    trending: `/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    topRated: `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
    actionMovies: `/discover/movie?include_adult=false&include_video=false&
    language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`,
    comedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};