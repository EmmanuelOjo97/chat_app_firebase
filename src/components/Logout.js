import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../styles.css";

const submitForm = (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      console.log("Sign out successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

function Logout() {
  return (
    <div>
      <form onSubmit={submitForm}>
        <button className="logout">sign out</button>
      </form>
    </div>
  );
}

export default Logout;
