import React from "react";
import CarouselBanner from "../components/CarouselBanner.jsx";
import ContentCarousel from "../components/ContentCarousel.jsx";

const Home = () => {
  return (
    <>
      <CarouselBanner
        title={"Now Playing"}
        url={
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
        }
      />
      ;
      <ContentCarousel
        title={"Popular Movies"}
        url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"}
      />
      <ContentCarousel
        title={"Popular Series"}
        url={"https://api.themoviedb.org/3/tv/popular"}
      />
      <ContentCarousel
        title={"Trending This Week"}
        url={"https://api.themoviedb.org/3/trending/all/week"}
      />
    </>
  );
};

export default Home;
