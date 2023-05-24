import React from "react";
import { Link } from "react-router-dom";

export const AddButton = ({ name }) => {
  return (
    <>
      <Link className="nav-link" to={`/${name}`}>
        {name}
      </Link>
    </>
  );
};
