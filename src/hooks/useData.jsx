import { useState, useEffect } from "react";
import { tmdbApiToken } from "../utils/tmdbToken";

export default function useData() {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [watchProviders, setWatchProviders] = useState([]);

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

        setData(results.slice(0, 6));
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

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/697843/watch/providers";
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
        setWatchProviders(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return [data, genres, watchProviders];
}
