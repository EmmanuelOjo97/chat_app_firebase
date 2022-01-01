import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import "firebase/app";
import { firebase } from "firebase/app";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const googleHandler = async () => {
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // redux action? --> dispatch({ type: SET_USER, user });
      console.log("it is all working");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
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
