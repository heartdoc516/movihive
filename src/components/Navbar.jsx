import React, { useState } from "react";
import logo from "../assets/logo-yellow.svg";
import "../style/navbar.css";
import { Search, User, Star } from "react-feather";
import Navlink from "./Navlink";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [active, setIsActive] = useState("home");

  const handleActive = (name) => {
    setIsActive(name);
  };

  return (
    <nav className={`navbar`}>
      <div className="container-fluid">
        <div className="logo-container">
          <img className="navbar-logo" src={logo} alt="logo" />
        </div>
        <div className="nav-links d-none d-lg-flex justify-content-between">
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
        <div className="nav-links-end d-none d-lg-flex justify-content-end align-items-center gap-4">
          {user ? (
            <Link
              to="/watchlist"
              className="watchlist d-flex justify-content-between align-items-center"
            >
              <div className="title lh-1 pt-1 pe-1">My Watchlist</div>
              <Star color="gold" size={20} />
            </Link>
          ) : (
            <Link to="/auth">
              <User color="gold" size={20} />
            </Link>
          )}

          <Link
            to="search"
            className="d-flex justify-content-center align-items-center"
          >
            <Search color="gold" size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
