import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import Movies from "./pages/Movies.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Tv from "./pages/Tv.jsx";
import Navbar from "./components/Navbar.jsx";
import Search from "./pages/Search.jsx";
import AuthPage from "./pages/AuthPage.jsx";

import { LoadingContextProvider } from "./context/AppContext.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <LoadingContextProvider>
      <div className="App">
        <div className=""></div>
        <Navbar user={user} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/watchlist" element={user ? <Watchlist /> : <Home />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/auth"
            element={<AuthPage user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </LoadingContextProvider>
  );
}

export default App;
