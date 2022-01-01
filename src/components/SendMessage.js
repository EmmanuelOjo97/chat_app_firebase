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
    const { uid, photoURL } = auth.currentUser;

    const docRef = await addDoc(collection(db, "messages"), {
      text: message,
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
        <div className="sendMsg">
          <textarea
            cols="30"
            rows="10"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="send-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
