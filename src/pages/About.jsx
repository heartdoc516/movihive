import React, { useEffect, useState } from "react";
import { tmdbApiToken } from "../utils/tmdbToken";
import "../style/gridbackground.css";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tmdbApiToken}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="grid-background">
      {data.map((item) => (
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
          className="bg-item"
        />
      ))}
    </div>
  );
};

export default About;
