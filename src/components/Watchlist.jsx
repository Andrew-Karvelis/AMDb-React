import React from "react";

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div className="container">
      <div className="row row__watchlist">
          <h2 className="user__watchlist home__subtitle">Your Watchlist</h2>
        {watchlist && watchlist.length > 0 ? (
          <div className="watchlist__item--list">
            {watchlist.map((movie) => (
              <div key={movie.id} className="watchlist__item">
                
                <div className="watchlist__item--poster-container">

                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="watchlist__item--poster"
                  />
                <div className="remove__from--watchlist" onClick={() => removeFromWatchlist(movie.id)}>-</div>
                  </div>
                <h3 className="watchlist__item--title">{movie.Title}</h3>
                {/* <div className="slider__controls"></div> */}
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
