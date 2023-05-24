import React from "react";
import { Link } from "react-router-dom";

export const SubNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"materiasprimas"}>
                Materias Primas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"insumos"}>
                Insumos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"packaging"}>
                Packaging
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"productos"}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"producciones"}>
                Producciones
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
