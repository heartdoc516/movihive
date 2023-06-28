import React, { useState } from "react";
import logo from "../assets/logo-yellow.png";
import "../style/main.css";
import { Search, User, Star } from "react-feather";
import Navlink from "./Navlink";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  const [active, setIsActive] = useState("home");

  const handleActive = (name) => {
    setIsActive(name);
  };

  return (
    <nav className={`d-flex justify-content-beteen p-2 navbar`}>
      <div className="container-fluid d-flex justify-content-between">
        <img className="navbar-logo" src={logo} alt="logo" />
        <div className="d-flex justify-content-between">
          <Navlink
            name="Home"
            slug="/"
            activeLink={active}
            setIsActive={handleActive}
          />
          <Navlink
            name="Movies"
            slug="movies"
            activeLink={active}
            setIsActive={handleActive}
          />
          <Navlink
            name="TV"
            slug="tv"
            activeLink={active}
            setIsActive={handleActive}
          />
          <Navlink
            name="Categories"
            slug="categories"
            activeLink={active}
            setIsActive={handleActive}
          />
          <Navlink
            name="About"
            slug="about"
            activeLink={active}
            setIsActive={handleActive}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center gap-4">
          {isAuthenticated ? (
            <div className="d-flex justify-content-between align-items-center">
              <div className="title lh-1 text-bg-dark pt-1 pe-1">
                My Watchlist
              </div>
              <Star color="gold" size={20} />
            </div>
          ) : (
            <Link to="/auth">
              <User color="gold" size={20} />
            </Link>
          )}

          <Link to="search">
            <Search color="gold" size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
