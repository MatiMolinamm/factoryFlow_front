import React from "react";
import AddForm from "../components/AddForm";

export const Add = ({ name }) => {
  return (
    <>
      <h3>Agregar {name}</h3>
      <AddForm name={name} />
    </>
  );
};
