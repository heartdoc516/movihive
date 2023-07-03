import React, { useEffect, useState } from "react";
import { tmdbApiToken } from "../utils/tmdbToken.js";
import useData from "../hooks/useData.jsx";
import "../style/carouselbanner.css";
import { Star } from "react-feather";
import { Link } from "react-router-dom";

const CarouselBanner = () => {
  const [data, genres, watchProviders] = useData();

  const [activeIndicator, setActiveIndicator] = useState(0);

  function getGenreNames(genreIdArray, genres) {
    let genreNames = [];
    genres.forEach((genre) => {
      if (genreIdArray.includes(genre.id)) {
        genreNames.push(genre.name);
      }
    });
    return genreNames;
  }

  function handleSetActiveIndicator(activeIdx, direction, idxToGoTo) {
    if (direction === "next") {
      if (activeIdx === data.length - 1) {
        setActiveIndicator(0);
      } else {
        setActiveIndicator((state) => state + 1);
      }
    }
    if (direction === "prev") {
      if (activeIdx === 0) {
        setActiveIndicator(data.length - 1);
      } else {
        setActiveIndicator((state) => state - 1);
      }
    }
    if (direction === "direct") {
      setActiveIndicator(idxToGoTo);
    }
  }

  return (
    <div id="carouselExample" className="carousel-banner carousel slide">
      <h1 className="now-playing title text-white">Now Playing</h1>

      <div className="carousel-inner">
        {data.map((item, idx) => (
          <div
            className={`carousel-item ${idx === activeIndicator && "active"}`}
          >
            <div className="img-container">
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                className="d-block"
                alt="..."
              />

              <div className="text-block">
                <h2 className="title text-white">{item.original_title}</h2>

                <div className="d-none mt-3 d-sm-flex justify-content-aroud gap-3 flex-wrap">
                  {getGenreNames(item.genre_ids, genres).map((genre) => (
                    <div className="genre text-white">{genre}</div>
                  ))}
                </div>
                <div className="mt-3">
                  <button className="trailer-button btn">Watch Trailer</button>
                  <Link className="ms-3">
                    {<Star color="gold" size={20} />}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev align-items-center"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={() => handleSetActiveIndicator(activeIndicator, "prev")}
      >
        <span
          className="carousel-control-prev-icon align-bottom"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next align-items-center"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={() => handleSetActiveIndicator(activeIndicator, "next")}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="d-flex justify-content-center gap-2 mt-3">
        {data.map((item, idx) => (
          <div
            className={`indicator ${activeIndicator === idx && "active"}`}
            onClick={() =>
              handleSetActiveIndicator(activeIndicator, "direct", idx)
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
