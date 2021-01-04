import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start__container">
      <div className="start">
        <div>
          <h1>Méthode Lafay : des exercices de musculation sans matériel</h1>
          <h2>Bienvenue</h2>
          <Link to="/start">
            <h3>COMMENCEZ LA SEANCE</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
