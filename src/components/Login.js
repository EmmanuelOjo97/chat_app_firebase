import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const googleHandler = async () => {
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("it is all working");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

function Login() {
  return (
    <div>
      <div className="login-area">
        <h3>Welcome to fbChat</h3>
        <div className="google-login">
          <button
            className="login-button google"
            onClick={() => googleHandler()}
          >
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
