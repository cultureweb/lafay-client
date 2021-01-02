import "./App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log({ isLoggedIn });

  return (
    <div className="App">
      <Router>
        {!isLoggedIn ? (
          <>
            <Switch>
              <Route path="/">
                <h1> login page</h1>
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
