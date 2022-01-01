import React from "react";
import Login from "./components/Login";
import "./styles.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Chat /> : <Login />}</div>;
}

export default App;
