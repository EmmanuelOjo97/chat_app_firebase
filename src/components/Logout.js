import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const submitForm = (e) => {
  e.preventDefault();
  console.log("presser");
  signOut(auth)
    .then(() => {
      console.log("Sign out successful");
      // window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

function Logout() {
  return (
    <div>
      <form onSubmit={submitForm}>
        <button>sign out</button>
      </form>
    </div>
  );
}

export default Logout;
