import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});

  useEffect(() => {}, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const apiUrl = `https://www.omdbapi.com/?apikey=950c424d&s=${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSearchedMovies(data.Search || []))
      .catch((error) => console.error("Error fetching data: ", error));
  };

  const handleMovieClick = (movie) => {
    setFeaturedMovie(movie);
  };

  return (
    <section className="landing__page">
      <Navbar onSearch={handleSearch} />
      <div className="container featured__container">
        <div className="row">
          <div className="featured__wrapper">
            {featuredMovie && (
              <div className="featured__main" key={featuredMovie.imdbID}>
                <div
                  className="featured__main--poster-container"
                  key={featuredMovie.imdbID}
                >
                  <img src={featuredMovie.Poster} alt={featuredMovie.Title} />
                  <div className="featured__main--movie-description">
                    <h2 className="featured__main--movie--title">
                      {featuredMovie.Title}
                    </h2>
                    <p className="featured__main--movie-plot">
                      {featuredMovie?.Plot || ""}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="featured__main--banner">
              <h1 className="search__title">Search results for:</h1>
              <span className="search__query--title">{searchQuery}</span>
            </div>

            <div className="featured__sub--list">
              {searchedMovies.slice(0, 3).map((movie) => (
                <div
                  className="featured__sub--movie"
                  key={movie.imdbID}
                  onClick={() => handleMovieClick(movie)}
                >
                  <h3 className="featured__sub--movie-subtitle">
                    {movie.Title}
                  </h3>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="featured__sub--poster"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="user__watchlist">Watchlist</div>
      </div>
      <div className="container">
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
