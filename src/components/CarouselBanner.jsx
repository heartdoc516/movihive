import React, { useEffect, useState } from "react";
import { tmdbApiToken } from "../utils/tmdbToken.js";
import "../style/carouselbanner.css";
import { Star } from "react-feather";
import { Link } from "react-router-dom";

function getGenreNames(genreIdArray, genres) {
  let genreNames = [];
  genres.forEach((genre) => {
    if (genreIdArray.includes(genre.id)) {
      genreNames.push(genre.name);
    }
  });
  return genreNames;
}

const CarouselBanner = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tmdbApiToken}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        const results = json.results;
        const active = results[0];
        setData(results.slice(0, 6));
        setActive(active);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tmdbApiToken}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setGenres(json.genres);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div id="carouselExample" className="carousel-banner carousel slide">
      <h1 className="now-playing title text-white">Now Playing</h1>

      <div className="carousel-inner">
        {data.map((item) => (
          <div className={`carousel-item ${active.id === item.id && "active"}`}>
            <div className="img-container">
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                className="d-block"
                alt="..."
              />

              <div className="text-block">
                <h2 className="title text-white">{item.original_title}</h2>

                <button className="trailer-button btn">Watch Trailer</button>
                <Link className="ms-3">{<Star color="gold" size={20} />}</Link>
                <div className="d-none mt-3 d-sm-flex justify-content-aroud gap-3 flex-wrap">
                  {getGenreNames(item.genre_ids, genres).map((genre) => (
                    <div className="genre text-white">{genre}</div>
                  ))}
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
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselBanner;
