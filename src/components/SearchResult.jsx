import React from "react";
import { User, Film } from "react-feather";

const SearchResult = ({ content, type }) => {
  const imgPath =
    type === "person" ? content.profile_path : content.poster_path;

  if (imgPath === null) {
    return <Film size={30} color="gold" />;
  } else {
    return (
      <div className="search-result">
        <img
          src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
          alt=""
          className="w-100"
        />
        {type === "person" && (
          <>
            <h5 className="text-white">{content.name}</h5>
            <p className="text-white-50">{content.known_for_department}</p>
          </>
        )}
      </div>
    );
  }
};

export default SearchResult;
