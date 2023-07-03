import { tmdbApiToken } from "./tmdbToken";

export default function getWatchProviders(contentId) {
  let url = `https://api.themoviedb.org/3/movie/${contentId}/watch/providers`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tmdbApiToken}`,
    },
  };

  try {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json.results.CA));
  } catch (error) {
    console.log(error);
  }
}
