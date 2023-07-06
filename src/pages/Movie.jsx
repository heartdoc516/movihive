import React from "react";
import { useParams } from "react-router-dom";

const Media = () => {
  const params = useParams();

  return <div className="text-white">{params.movieId}</div>;
};

export default Media;
