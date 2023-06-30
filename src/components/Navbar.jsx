import React, { useState } from "react";
import logo from "../assets/logo-yellow.svg";
import "../style/navbar.css";
import { Search, User, Star, Menu, X } from "react-feather";
import Navlink from "./Navlink";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";

const Navbar = ({ user }) => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <>
      <nav className={`navbar`}>
        <div className="container-fluid">
          <div className="logo-container">
            <img className="navbar-logo pt-1" src={logo} alt="logo" />
          </div>
          <div className="nav-links d-none d-lg-flex justify-content-between">
            <Navlink name="Home" slug="/" setMenuDisplay={setMenuDisplay} />
            <Navlink
              name="Movies"
              slug="movies"
              setMenuDisplay={setMenuDisplay}
            />
            <Navlink name="TV" slug="tv" setMenuDisplay={setMenuDisplay} />
            <Navlink
              name="Categories"
              slug="categories"
              setMenuDisplay={setMenuDisplay}
            />
            <Navlink
              name="About"
              slug="about"
              setMenuDisplay={setMenuDisplay}
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
          <button
            onClick={() => {
              menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true);
            }}
            className="d-lg-none bg-transparent border-0 p-0"
          >
            {menuDisplay ? (
              <X color="gold" size={20} />
            ) : (
              <Menu color="gold" size={20} />
            )}
          </button>
        </div>
      </nav>
      {menuDisplay && (
        <MobileMenu user={user} setMenuDisplay={setMenuDisplay} />
      )}
    </>
  );
};

export default Navbar;
