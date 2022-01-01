import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import { auth, db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import SendMessage from "./SendMessage";
import "../styles.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  //   const [messageOrder, setMessageOrder] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc"),
      limit(50)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <Logout />
      <div className="msg">
        {messages.map(({ text, id, photoURL, uid }) => {
          return (
            <div key={id}>
              <div
                className={`image${
                  uid == auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
              </div>
              <p
                className={`message${
                  uid == auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                {text}
              </p>
            </div>
          );
        })}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
