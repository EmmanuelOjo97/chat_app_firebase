import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import { auth, db } from "../firebase";
// import {
//   collection,
//   getDocs,
//   query,
//   onSnapshot,
//   docs,
// } from "firebase/firestore";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
  where,
} from "firebase/firestore";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // const q = query(collection(db, "messages"), limit(3), (poop) => {
    //   console.log(poop.docs.map((doc) => doc.data()));
    // });

    const q = query(collection(db, "messages"), orderBy("author"));
    // const poop = query(collection(db, "messages"), limit(1));

    // onSnapshot(
    //   collection(db, "messages"),
    //   orderBy("createdAt"),
    //   limit(1),
    //   (snapshot) => {
    //     console.log(snapshot.docs.map((doc) => doc.data()));
    //   }
    // );

    // onSnapshot(q, (snapshot) => {
    //   console.log(snapshot.docs.map((doc) => doc.data()));
    // });

    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    console.log(messages);
    console.log(messages.length);
  }, []);

  return (
    <div>
      {messages.map(({ id, text, author }) => {
        return (
          <div>
            <p>{author}</p>
            <h1>{text}</h1>
          </div>
        );
      })}
      <h1>Hi we are chatting</h1>
      <Logout />
    </div>
  );
}

export default Chat;
