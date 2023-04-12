import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [state, setState] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user.displayName);
        setState(true);
        // console.log(user);
      }
    });
  });
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("Sign Out Successfully");
        setState(false);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <h1 className="text-color">Welcome To the Dashboard</h1>
      {state ? (
        <h3 className="text-color">Hello world, {user}</h3>
      ) : (
        <h3 className="text-color">Please login to your account</h3>
      )}
      <button
        type="text"
        className="submit"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button type="text" className="submit" onClick={logOut}>
        Sign Out
      </button>
    </>
  );
};

export default Dashboard;
