import React from "react";
import { Star } from "react-feather";
import { Link } from "react-router-dom";
import GenreTags from "./GenreTags";
import "../style/banner.css";

const Banner = ({ item, index, activeIndicator, genres }) => {
  return (
    <div className={`carousel-item ${index === activeIndicator && "active"}`}>
      <div className="img-container">
        <img
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          className="d-block"
          alt="..."
        />

        <div className="text-block">
          <h2 className="title text-white">{item.original_title}</h2>

          <div className="d-none mt-3 d-sm-flex justify-content-aroud gap-3 flex-wrap">
            {<GenreTags genreIds={item.genre_ids} genres={genres} />}
          </div>
          <div className="mt-3">
            <button className="trailer-button btn">Watch Trailer</button>
            <Link className="ms-3">{<Star color="gold" size={20} />}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
