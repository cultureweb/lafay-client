import "./App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Auth/Login";
import fire from "./Auth/fire";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log({ isLoggedIn });

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    console.log("logout!!!!");
    fire.auth().signOut();
  };

  return (
    <div className="App">
      <Router>
        {!isLoggedIn ? (
          <>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </>
        ) : (
          <Home signOut={signOut} />
        )}
      </Router>
    </div>
  );
};

export default App;
