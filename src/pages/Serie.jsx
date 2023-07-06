import React from "react";
import { useParams } from "react-router-dom";

const Serie = () => {
  const params = useParams();

  return <div className="text-white">{params.serieId}</div>;
};

export default Serie;
