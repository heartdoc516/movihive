import React, { useState } from "react";
import "../style/moviecard.css";
import { Film, Star } from "react-feather";
import GenreTags from "./GenreTags.jsx";
import Favorite from "./Favorite.jsx";

const MovieCard = ({ item, genres }) => {
  const [activeHoverCard, setActiveHoverCard] = useState(false);

  return (
    <div
      className="w-100 movie-card position-relative"
      onMouseEnter={() => setActiveHoverCard(true)}
      onMouseLeave={() => setActiveHoverCard(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt=""
        className="w-100 pb-5"
      />
      <div className={`hover-card ${activeHoverCard ? "active" : ""}`}>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <Film color="gold" size={20} />
          <Favorite />
        </div>
        <div className="d-block mt-3">
          <GenreTags genreIds={item.genre_ids} genres={genres} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
