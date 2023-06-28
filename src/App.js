import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "pages/Home.jsx";
import Categories from "pages/Categories.jsx";
import Movies from "pages/Movies.jsx";
import Tv from "pages/Tv.jsx";
import Navbar from "components/Navbar.jsx";
import Search from "./pages/Search.jsx";
import Signin from "./pages/Auth.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <div className=""></div>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
