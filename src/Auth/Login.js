import React, { useState } from "react";
import "./Login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar } from "@material-ui/core";
import fire from "./fire";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        // console.error("Incorrect username or password");
        setError("Incorrect username or password");
      });
  };

  return (
    <div className="login">
      <Avatar style={{ backgroundColor: "#969292" }}>
        <LockOutlinedIcon fontSize="large" />
      </Avatar>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login__input">
          <input
            placeholder="Email"
            type="text"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="login__input">
          <input
            placeholder="Password"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        {error && <p className="login__error">{error}</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
