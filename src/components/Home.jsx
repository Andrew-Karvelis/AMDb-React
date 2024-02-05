import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Watchlist from "./Watchlist";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});
  const [watchlist, setWatchlist] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [error, setError] = useState(null);


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

  const addToWatchList = () => {
    if(Object.keys(featuredMovie).length !== 0) {
      if(watchlist.some((movie) => movie.imdbID === featuredMovie.imdbID)) {
        setError("Movie already added to the watchlist!");
        return;
      }

      const timestamp = new Date().getTime();
      const newWatchListItem = {...featuredMovie, id: timestamp };
      setWatchlist((prevWatchlist) => [...prevWatchlist, newWatchListItem]);
      setError(null);
    }
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
                  {featuredMovie.Poster && (
                    <div className="watchlist__icon" onClick={addToWatchList}>
                      +
                    </div>
                  )}
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
              {searchedMovies
                .slice(startIndex, startIndex + 7)
                .map((movie) => (
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

              <div className="slider__controls"></div>
            </div>
          </div>
        </div>
      </div>
      {error && (
      <div className="error__popup">
        <p>{error}</p>
        <button onClick={() => setError(null)}>X</button>
      </div>
      )}
      <Watchlist watchlist={watchlist} />
    </section>
  );
};

export default Home;
