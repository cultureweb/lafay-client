import React from "react";
import "./Home.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import firebase from "firebase";

const Home = ({ signOut }) => {
  const user = firebase.auth().currentUser;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }

  return (
    <div className="home__container">
      <ExitToAppIcon onClick={signOut} className="home__logout" />
      {/* <div>
        <p className="home__logout"> signout</p>
      </div> */}

      {/* <div className="home">
        <div>
          <h1>Méthode Lafay : des exercices de musculation sans matériel</h1>
          <h2>Bienvenue</h2>
          <h3>COMMENCEZ LA SEANCE</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
