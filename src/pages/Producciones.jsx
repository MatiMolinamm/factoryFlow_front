import React from "react";
import { ListAll } from "../components/ListAll";
import { AddButton } from "../components/AddButton";

export const Producciones = () => {
  return (
    <>
      <AddButton name={"producciones"} />
      <ListAll name={"Producciones"} data={{}} />
    </>
  );
};
