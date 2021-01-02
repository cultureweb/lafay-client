import React from "react";
import "./Login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar } from "@material-ui/core";
const Login = () => {
  return (
    <div className="login">
      <Avatar style={{ backgroundColor: "#969292" }}>
        <LockOutlinedIcon fontSize="large" />
      </Avatar>
      <h1>Login</h1>
      <form>
        <div className="login__input">
          <input placeholder="Email" type="text" />
        </div>
        <div className="login__input">
          <input placeholder="Password" type="password" />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
