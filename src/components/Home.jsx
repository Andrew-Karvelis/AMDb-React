import React from "react";

function Home() {
//   //950c424d API KEY
//   const movieListElem = document.querySelector(".movie__list");
//   const searchValue = document.querySelector(".search__value");
//   const n = 6;
//   let movieData = {};
//   //SEARCH BAR
//   async function searchTerm(event) {
//     const movieId = event.target.value;
//     getMovies(movieId);
//     searchValue.innerHTML = movieId;
//   }

//   function renderMovies() {
//     if (movieData.Search) {
//       movieListElem.innerHTML = movieData.Search.map((movie) =>
//         getMovieDescription(movie)
//       )
//         .slice(0, n)
//         .join("");

//       document.querySelector(".no__movies--container").style.display = "none";
//       movieListElem.style.display = "block";
//     } else {
//       console.log("movie not found");

//       document.querySelector(".no__movies--container").style.display = "block";
//       movieListElem.style.display = "none";
//     }
//   }

//   function searchResult(searchValue) {
//     return `<div class="results__bar">
//                   <h2>Search results for: <span class="purple search__value" onchange="searchTerm(event)">${searchValue}</span></h2>`;
//   }

//   //FETCHING MOVIES FROM BACKEND
//   async function getMovies(movieId) {
//     const movies = await fetch(
//       `https://www.omdbapi.com/?apikey=950c424d&s=${movieId}`
//     );
//     movieData = await movies.json();
//     setTimeout(() => {
//       renderMovies();
//     }, 1000);
//   }

//   //AMENDING HTML DYNAMICALLY
//   function getMovieDescription(movie) {
//     return `<div class="movie">
  
//           <figure>
//               <img
//               src="${movie.Poster}"
//               alt=""
//               class="movie__img"
//               />
//           </figure>
//           <div class="movie__description--list">
//               <h3 class="movie__description movie__title">${movie.Title}</h3>
//               <p class="movie__description movie__type"><span class="movie__description--heading">Type:</span> ${movie.Type}</p>
//               <p class="movie__description movie__year"><span class="movie__description--heading">Year:</span> ${movie.Year}</p>
//               <p class="movie__description movie__imdb-id"><span class="movie__description--heading">IMDB ID:</span> ${movie.imdbID}</p>
//           </div>
//       </div>`;
//   }
  return (
    <section className="landing__page">
      <div className="container">
        <div className="row">
          <div className="featured__wrapper">
            <div className="featured__main"> featured main</div>
            <div className="featured__sub"> Up Next</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="latest__releases--wrapper">
          <h2 className="home__subtitle">Latest Releases</h2>
          <div className="latest__releases--list">
            <div>item1</div>
            <div>item2</div>
            <div>item3</div>
          </div>
        </div>
        <div className="user__watchlist">Watchlist</div>
        <div className="top__rated--wrapper">
          <h2 className="home__subtitle">Top 10 on AMDb this week</h2>
          <div className="top__rated--list">
            <div className="top__rated--item">item1</div>
            <div className="top__rated--item">item2</div>
            <div className="top__rated--item">item3</div>
            <div className="top__rated--item">item4</div>
            <div className="top__rated--item">item5</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
