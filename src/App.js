import "./App.css";

import React from "react";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Latest from "./components/Latest.jsx";

const App = () => {
  return (
    <>
      <Home />
      <Latest />
      <Footer />
    </>
  );
}

export default App;
