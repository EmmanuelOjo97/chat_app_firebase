import React, { useState } from "react";
import { db, auth } from "../firebase";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function SendMessage() {
  const [message, setMessage] = useState("");

  const sendText = async (e) => {
    e.preventDefault();
    //   const auth = getAuth()
    //   const user = auth.currentUser
    const { uid, photoURL } = auth.currentUser;

    const docRef = await addDoc(collection(db, "messages"), {
      text: message,
      //   author: "gamers",
      uid,
      photoURL,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={sendText}>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
