import React from "react";
import "./Login.css";
import { loginUrl } from "./Tunicia";
function Login() {
  return (
    <div className="login">
      <img src="" alt="no internet" />
      <a href={loginUrl}>login</a>
    </div>
  );
}

export default Login;
