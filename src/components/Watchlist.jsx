import React from 'react';

function Watchlist({ watchlist }) {
  return (
    <div className="container">
      <h2 className="user__watchlist home__subtitle">Watchlist</h2>
      {watchlist && watchlist.length > 0 ? (
        <div className="watchlist__items">
          {watchlist.map((movie) => (
            <div key={movie.imdbID} className="watchlist__item">
            </div>
          ))}
        </div>
      ) : (
        <h1>Browse Thousands of Movies Through AMDb and Add Them To Your Watchlist!</h1>
      )}
    </div>
  );
}

export default Watchlist;
