import React from "react";

function Navbar() {
  const movieListElem = document.querySelector(".movie__list");
  const searchValue = document.querySelector(".search__value");
  const n = 6;
  let movieData = {};

  async function searchTerm(event) {
    const movieId = event.target.value;
    getMovies(movieId);
    searchValue.innerHTML = movieId;
  }

  async function getMovies(searchTerm) {
    const movies = await fetch(
      `https://www.omdbapi.com/?apikey=950c424d&s=${searchTerm}`
    );
    const movieData = await movies.json();
    console.log(movieData);
  }
  getMovies();

  return (
    <nav className="nav__bar--wrapper">
      <div className="nav__bar">
        <button className="btn btn__logo">AMDb</button>
        <div className="searchbar__wrapper">
          <input
            type="text"
            placeholder="Search AMDb"
            className="searchbar"
            onChange={() => searchTerm()}
          />
        </div>
        <button className="btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
