import React from "react";
import "./Login.css";
import { loginUrl } from "./spotfiy";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      {/* Login with Spotify Button */}
      <div className="login__title">
        <h3> Created by </h3>
        <h1>Calvin Thang</h1>
      </div>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
