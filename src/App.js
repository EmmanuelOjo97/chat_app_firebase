import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./styles.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);
  const loggedIn = true;

  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/chat" element={<Chat/>}  />
      </Routes>
    </BrowserRouter> */}
      <h1>Hi gamers</h1>
      {user ? <Chat /> : <Login />}
    </div>
  );
}

export default App;
