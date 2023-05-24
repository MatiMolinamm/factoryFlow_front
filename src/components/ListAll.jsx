import React from "react";
import { TableList } from "./TableList";

export const ListAll = ({ name, data }) => {
  return (
    <div class="container">
      <h2>{name}</h2>
      <hr />
      <hr />
      <TableList data={data} />
    </div>
  );
};
