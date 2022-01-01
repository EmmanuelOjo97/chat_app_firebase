import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import { auth, db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
  where,
} from "firebase/firestore";
import SendMessage from "./SendMessage";
import "../styles.css";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // const q = query(collection(db, "messages"), limit(3), (poop) => {
    //   console.log(poop.docs.map((doc) => doc.data()));
    // });

    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc"),
      limit(3)
    );
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

    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
    // console.log(messages[0].uid);
    // console.log(messages.length);
    // console.log(messages.reverse());
    console.log(auth.currentUser.uid);
    return () => {
      unsub();
    };
  }, []);

  //   useEffect(() => {
  //       effect
  //       return () => {
  //           cleanup
  //       }
  //   }, [input])

  return (
    <div>
      {messages.map(({ text, author, id, photoURL, uid }) => {
        return (
          <div
            key={id}
            className={`msg${
              uid == auth.currentUser.uid ? "sent" : "received"
            }`}
          >
            <p>{author}</p>
            <h1>{text}</h1>
            <img src={photoURL} alt="" />
            <p>{uid}</p>
          </div>
        );
      })}
      <Logout />
      <SendMessage />
    </div>
  );
}

export default Chat;
