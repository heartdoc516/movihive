import React from "react";

const SearchResult = ({ content, type }) => {
  const imgPath =
    type === "person" ? content.profile_path : content.poster_path;

  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
      alt=""
      className="w-100"
    />
  );
};

export default SearchResult;
