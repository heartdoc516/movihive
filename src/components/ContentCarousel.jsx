import React, { useEffect, useState } from "react";
import useGenres from "../hooks/useGenres.jsx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "../style/contentcarousel.css";

import { Pagination, Navigation, Virtual } from "swiper/modules";
import MovieCard from "./MovieCard.jsx";

const ContentCarousel = () => {
  const [data, setData] = useState([]);
  const genres = useGenres();

  useEffect(() => {
    const fetch = require("node-fetch");

    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmZjNTcxMzZmNzEyMjlhMTY3NTVlNTRmZTc5YmE3ZCIsInN1YiI6IjY0OGM5ZWIwMDc2Y2U4MDBlNzQzOTc5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9lCZhB2s6M6hSUyJUsuKeWKY4V3R2_KwMTgtapE5lGE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <>
      <h3 className="title text-white mt-3 ms-4">Popular Movies</h3>
      <Swiper
        virtual
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation, Virtual]}
        className="content-carousel"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <MovieCard item={item} genres={genres} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ContentCarousel;
