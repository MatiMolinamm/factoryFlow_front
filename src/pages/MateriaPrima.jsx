import React from "react";
import { ListAll } from "../components/ListAll";
import { AddButton } from "../components/AddButton";

export const MateriaPrima = () => {
  return (
    <>
      <AddButton name={"materiasprimas"} />
      <ListAll name={"Materias Primas"} data={{}} />
    </>
  );
};
