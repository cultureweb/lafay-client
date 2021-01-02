import React from "react";
import "./Home.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Home = ({ signOut }) => {
  return (
    <>
      <ExitToAppIcon onClick={signOut} className="home__logout" />
      {/* <div>
        <p className="home__logout"> signout</p>
      </div> */}
      <div className="home">
        <h1>Méthode Lafay : des exercices de musculation sans matériel</h1>
        <h2>Bienvenue</h2>

        <h3>COMMENCEZ LA SEANCE</h3>
      </div>
    </>
  );
};

export default Home;
