import React, { useEffect } from "react";
import getWatchProvider from "../utils/getWatchProviders.js";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/contentcarousel.css";

import { Pagination, Navigation } from "swiper/modules";

const ContentCarousel = () => {
  return (
    <>
      <h3 className="title text-white mt-3 ms-4">Popular Movies</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="content-carousel"
      >
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt=""
            className="w-100"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ContentCarousel;
