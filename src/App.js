import "./App.css";

import React from "react";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Latest from "./components/Latest.jsx";
import Watchlist from "./components/Watchlist.jsx";

const App = () => {
  return (
    <>
      <Home />
      <Watchlist />
      <Latest />
      <Footer />
    </>
  );
}

export default App;
