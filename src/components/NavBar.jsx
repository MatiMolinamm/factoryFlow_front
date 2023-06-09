import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Factory Flow
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Agregar
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link className="nav-link" to={"addmp"}>
                      Materia Prima
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"addinsumo"}>
                      Insumos
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"addpackaging"}>
                      Packaging
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"addproducto"}>
                      Producto
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="nav-link" to={"addproduccion"}>
                      Produccion
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/*  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
  </form>*/}
          </div>
        </div>
      </nav>
    </>
  );
};
