import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import "../App.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errmessage, seterrmessage] = useState("");
  const handleSumbit = () => {
    console.log(values);
    if (
      !values.firstname ||
      !values.lastname ||
      !values.email ||
      !values.password
    ) {
      seterrmessage(`Fill all the fields`);
    } else {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (userCredential) => {
          console.log(userCredential);
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: `${values.firstname} ${values.lastname}`,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
          // ..
        });
    }
  };
  return (
    <>
      <div className="form">
        <div className=" title">Welcome !!</div>
        <div className="subtitle">To Sign Up Page</div>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(event) => {
              setValues((prev) => ({ ...prev, firstname: event.target.value }));
            }}
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(event) => {
              setValues((prev) => ({ ...prev, lastname: event.target.value }));
            }}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Last name
          </label>
        </div>
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
        <button type="text" className="submit" onClick={handleSumbit}>
          Sign Up
        </button>
        <div className="flex">
          <h4 className="text-color">Already have an account ?</h4>
          <Link to="/ " className="text-color">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
