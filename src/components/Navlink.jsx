import React from "react";
import { NavLink } from "react-router-dom";

import "../style/main.css";

const Navlink = ({ name, slug }) => {
  let classname = `title fs-4 nav_link`;

  return (
    <NavLink to={slug} className={classname}>
      {name}
    </NavLink>
  );
};

export default Navlink;
