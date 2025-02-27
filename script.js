import { IMAGE_URL, base_url, API_KEY, requests  } from "./data.js";



const originalsDiv = document.querySelector("#NetflixContainer");
const trendingDiv = document.querySelector("#trendingContainer");
const topRatedDiv = document.querySelector("#topRatedContainer");
const actionMoviesDiv = document.querySelector("#ActionMoviesContainer");
const comedyMovieDiv = document.querySelector("#comedyMovieContainer");
const horronMovieDiv = document.querySelector("#horronMovieContainer");
const romanticMoviesDiv = document.querySelector("#romanticMoviesContainer");
const documentariesDiv = document.querySelector("#documentariesContainer");
// const chengeimgDiv = document.querySelector("#chenge_img");
// const dendom_imgDiv = document.querySelector("#rendom_img_click");
//const randomImageSection = document.querySelector("#randomImageSection");


const navbar = document.querySelector(".maim");
const content = document.querySelector(".cantent");


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
  // const movieDiv = document.createElement("div");
  // movieDiv.classList.add("movie-card"); 

  const movieImg = document.createElement("img");
  movieImg.src = IMAGE_URL + movie.poster_path;
  movieImg.alt = movie.title || movie.name;

  // movieDiv.appendChild(movieImg);
  container.appendChild(movieImg);
}

data.forEach((movies, index) => {
  if (index === 0) movies.forEach((movie) => createMovieCard(movie, originalsDiv));
  else if (index === 1) movies.forEach((movie) => createMovieCard(movie, trendingDiv));
  else if (index === 2) movies.forEach((movie) => createMovieCard(movie, topRatedDiv));
  else if (index === 3) movies.forEach((movie) => createMovieCard(movie, actionMoviesDiv));
  else if (index === 4) movies.forEach((movie) => createMovieCard(movie, comedyMovieDiv));
  else if (index === 5) movies.forEach((movie) => createMovieCard(movie, horronMovieDiv));
  else if (index === 6) movies.forEach((movie) => createMovieCard(movie, romanticMoviesDiv));
  else if (index === 7) movies.forEach((movie) => createMovieCard(movie, documentariesDiv));
});



function getRandomImage() {
        
  const randomIndex = Math.floor(Math.random() * data[0].length);
  const randomMovie = data[0][randomIndex];
  console.log(randomMovie);

  const Name = document.createElement("h1");
  Name.textContent = randomMovie.name;

  const overview = document.createElement("p")
  overview.textContent = randomMovie.overview;

  navbar.style.backgroundImage = `url(${IMAGE_URL + randomMovie.poster_path})`;
  navbar.style.backgroundSize = "cover";
  navbar.style.backgroundPosition = "center";

  content.prepend(Name,overview)
}
