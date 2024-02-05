import React from "react";

function Watchlist({ watchlist }) {
  return (
    <div className="container">
      <div className="row row__watchlist">
          <h2 className="user__watchlist home__subtitle">Your Watchlist</h2>
        {watchlist && watchlist.length > 0 ? (
          <div className="watchlist__item--list">
            {watchlist.map((movie) => (
              <div key={movie.id} className="watchlist__item">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="watchlist__item--poster"
                />
                <h3 className="watchlist__item--title">{movie.Title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="browse__watchlist--title">
            Browse Thousands of Movies Through AMDb and Add Them To Your
            Watchlist!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
