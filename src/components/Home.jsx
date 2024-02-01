import React, { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const n = 1
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearch = (query) => {
    const apiUrl = `https://www.omdbapi.com/?apikey=950c424d&s=${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSearchedMovies(data.Search || []))
      .catch((error) => console.error("Error fetching data: ", error));
  };

  return (
    <section className="landing__page">
      <Navbar onSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="featured__wrapper">
            {searchedMovies.map((movie) => (
              <figure className="featured__main" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
              </figure>
            ))}
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
};

export default Home;
