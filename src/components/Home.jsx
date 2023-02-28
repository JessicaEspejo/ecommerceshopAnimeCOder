import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="inicio">
        <h1>Bienvenido</h1>
        <Link to={"./Catalogo"}>
          <button className="buttonInicio "> catalogo completo </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
