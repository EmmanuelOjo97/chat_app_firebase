import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div id="login-page">
      <div className="login-area">
        <div className="google-login">
          <button className="login-button google">
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Login
          </button>
        </div>
        <div>
          <button className="login-button facebook">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
