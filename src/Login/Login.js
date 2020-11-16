import React from "react";
import "./Login.css";
import GooglePNG from "../assets/images/icons/google.png";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <button>
          <img src={GooglePNG} alt="" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
