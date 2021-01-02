import "./App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Auth/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log({ isLoggedIn });

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
          <Home />
        )}
      </Router>
    </div>
  );
};

export default App;
