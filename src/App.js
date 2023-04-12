// import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
