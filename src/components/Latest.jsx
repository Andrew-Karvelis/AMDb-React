import React, { useEffect, useState } from "react";

function Latest() {
  const [movies, setMovies] = useState([]);
  //   const apiUrl = `https://www.omdbapi.com/?apikey=950c424d&s=latest&type=movie`;
  const apiUrl = `https://www.omdbapi.com/?apikey=950c424d&s=deadpool`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          const moviesWithPoster = data.Search.filter(
            (movie) => movie.Poster !== "N/A"
          );

          const sortedMovies = moviesWithPoster.sort(
            (a, b) => new Date(b.Year) - new Date(a.Year)
          );
          setMovies(sortedMovies);
        }
      })
      .catch((error) => console.error("Error fetching movies: ", error));
  }, [apiUrl]);

  return (
    <div className="container">
      <div className="row">
        <div className="latest__releases--wrapper">
          <h2 className="home__subtitle">
            Latest Releases: Deadpool
          </h2>
          <div className="latest__releases--list">
            {movies.slice(0, 5).map((movie) => (
              <div key={movie.imdbID} className="latest__movie">
                <img
                  className="latest__movie--img"
                  src={movie.Poster}
                  alt={`${movie.Title} Poster`}
                />
                <div className="latest__movie--description">
                  <div>{movie.Title} </div>
                  <div>({movie.Year})</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
