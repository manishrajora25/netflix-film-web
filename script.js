// import { IMAGE_URL, base_url, API_KEY, requests } from "./data.js";

// const originalsDiv = document.querySelector("#NetflixContainer");
// const trendingDiv = document.querySelector("#trendingContainer");
// const topRatedDiv = document.querySelector("#topRatedContainer");
// const actionMoviesDiv = document.querySelector("#ActionMoviesContainer");
// const comedyMovieDiv = document.querySelector("comedyMovieContainer");
// const horronMovieDiv = document.querySelector("horronMovieContainer");
// const documentaries = document.querySelector("documentariesContainer");


// const data = [];

// async function fetchDataFromURL(value) {
//   const response = await fetch(base_url + value);
//   const result = await response.json();
//   console.log(result.results);
//   return result.results;
// }

// for (let i in requests) {
//   data.push(await fetchDataFromURL(requests[i]));
// }

// console.log(data);

// data.map((arr) => {
 
// });















import { IMAGE_URL, base_url, API_KEY, requests } from "./data.js";

const originalsDiv = document.querySelector("#NetflixContainer");
const trendingDiv = document.querySelector("#trendingContainer");
const topRatedDiv = document.querySelector("#topRatedContainer");
const actionMoviesDiv = document.querySelector("#ActionMoviesContainer");
// const comedyMovieDiv = document.querySelector("#comedyMovieContainer");
// const horronMovieDiv = document.querySelector("#horronMovieContainer");
// const documentariesDiv = document.querySelector("#documentariesContainer");
const chengeimgDiv = document.querySelector("#chenge_img");
const dendom_imgDiv = document.querySelector("#dendom_img_click");


const data = [];


async function fetchDataFromURL(value) {
  const response = await fetch(base_url + value);
  const result = await response.json();
  console.log(result.results);
  return result.results;
}

for (let i in requests) {
  const categoryData = await fetchDataFromURL(requests[i]); 
  data.push(categoryData);
}

console.log(data);

function createMovieCard(movie, container) {
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie-card"); 

  const movieImg = document.createElement("img");
  movieImg.src = IMAGE_URL + movie.poster_path;
  movieImg.alt = movie.title || movie.name;

  movieDiv.appendChild(movieImg);
  container.appendChild(movieDiv);
}

data.forEach((movies, index) => {
  if (index === 0) movies.forEach((movie) => createMovieCard(movie, originalsDiv));
  else if (index === 1) movies.forEach((movie) => createMovieCard(movie, trendingDiv));
  else if (index === 2) movies.forEach((movie) => createMovieCard(movie, topRatedDiv));
  else if (index === 3) movies.forEach((movie) => createMovieCard(movie, actionMoviesDiv));
  // else if (index === 4) movies.forEach((movie) => createMovieCard(movie, comedyMovieDiv));
  // else if (index === 5) movies.forEach((movie) => createMovieCard(movie, horronMovieDiv));
  // else if (index === 6) movies.forEach((movie) => createMovieCard(movie, documentariesDiv));
});





// chengeimgDiv.addEventListener("click", () => {
//   const allMovies = data.flat(); // Flatten the data array to access all movies
//   const randomMovie = allMovies[Math.floor(Math.random() * allMovies.length)]; // Pick a random movie

//   // Update image in chengeimgDiv
//   chengeimgDiv.innerHTML = ""; // Clear previous content
//   const randomImg = document.createElement("img");
//   randomImg.src = IMAGE_URL + randomMovie.poster_path;
//   randomImg.alt = randomMovie.title || randomMovie.name;
//   randomImg.classList.add("w-full", "h-full", "object-cover", "rounded-md", "shadow-lg");
//   chengeimgDiv.appendChild(randomImg);
// });

// // Initialize the app
// createMovieCard();












