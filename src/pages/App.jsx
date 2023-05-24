import React from "react";
import { InternalRoutes } from "./routes/InternalRoutes";
import { NavBar } from "../components/NavBar";
import { SubNavbar } from "../components/SubNavbar";

export const App = () => {
  return (
    <>
      <NavBar />
      <SubNavbar />
      <InternalRoutes />
    </>
  );
};

export default App;
