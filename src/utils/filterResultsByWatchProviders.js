import getWatchProviders from "./getWatchProviders";

export default function filterResultsByWatchProviders(results, userProviders) {
  results.forEach((result) => {
    const watchProviders = getWatchProviders(result.id, "movie");

    watchProviders.forEach((provider) => {
      if (userProviders.includes(provider)) {
        return result;
      }
    });
  });
}
