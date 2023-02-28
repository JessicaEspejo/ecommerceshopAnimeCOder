import React from "react";

import CardWidget from "../CardWidget";
import { Link } from "react-router-dom";
import Logo from '../../assets/img_pro/logo1.jpeg';
const NavBar = () => {

  return (
    <div className="Nav">
        <Link to={"/"}>  <img src={Logo} className="logo" /></Link>
      <nav className="navbar  navbar-expand-sm  p-2"  >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="nav-link" to={"/Catalogo"}>
                Catalogo 
              </Link>
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categoria
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/category/${"Estuche"}`}>
                    Estuche
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"Tapete"}`}>
                    Tapete de Anime
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"Figura"}`}>
                      Figura de Anime
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"Alcancia"}`}>
                    Alcancia Kawai
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CardWidget />
    </div>

  );
};
export default NavBar;