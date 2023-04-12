import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errmessage, seterrmessage] = useState("");
  const login = () => {
    if (!values.email || !values.password) {
      seterrmessage(`Fill all the fields`);
    } else {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          console.log(userCredential);
          //   const user = userCredential.user;
          //   await updateProfile(user, {
          //     displayName: `${values.firstname} ${values.lastname}`,
          //   });
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
          // ..
        });
    }
  };
  const loginwithgoogle = async () => {
    const provider = await new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <div className="form">
        <div className=" title">Welcome !!</div>
        <div className="subtitle ">To Login Page</div>

        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            onChange={(event) => {
              setValues((prev) => ({ ...prev, email: event.target.value }));
            }}
          />
          <div className="cut "></div>
          <label for="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="text"
            placeholder=" "
            onChange={(event) => {
              setValues((prev) => ({ ...prev, password: event.target.value }));
            }}
          />
          <div className="cut "></div>
          <label for="password" className="placeholder">
            Password
          </label>
        </div>
        <h5 className="text-red">{errmessage}</h5>
        <button type="text" className="submit" onClick={login}>
          Login
        </button>
        <button type="text" className="submit" onClick={loginwithgoogle}>
          Login with google
        </button>
        <div className="flex">
          <h4 className="text-color">Create New Account ?</h4>
          <Link to="/signup " className="text-color">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
