import { useState, useEffect } from "react";
import { tmdbApiToken } from "../utils/tmdbToken";

export default function useFetch(url, options, maxResults) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results.splice(0, maxResults));
      });
  }, []);

  return [data, setData];
}
