import React from "react";
import "../style/genretags.css";

const GenreTags = ({ genreIds, genres }) => {
  console.log(genres);
  function getGenreNames(genreIdArray, genres) {
    let genreNames = [];
    genres.forEach((genre) => {
      if (genreIdArray.includes(genre.id)) {
        genreNames.push(genre.name);
      }
    });
    return genreNames;
  }

  return (
    <div className="genre-tags d-none d-sm-flex justify-content-aroud gap-3 flex-wrap">
      {getGenreNames(genreIds, genres).map((genre) => (
        <div className="genre text-white">{genre}</div>
      ))}
    </div>
  );
};

export default GenreTags;
