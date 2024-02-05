import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <nav className="nav__bar--wrapper">
      <div className="nav__bar">
        <button className="btn btn__logo">AMDb</button>
        <div className="searchbar__wrapper">
          <input
            type="text"
            placeholder="Search AMDb"
            className="searchbar"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="btn search__btn">
            Search!
          </button>
        </div>
        <button className="btn btn__signin">Sign In</button>
      </div>
    </nav>
  );
};
export default Navbar;
