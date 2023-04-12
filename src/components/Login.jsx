import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="form">
        <div className=" title">Welcome !!</div>
        <div className="subtitle"></div>
        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Last name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut "></div>
          <label for="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input id="password" className="input" type="text" placeholder=" " />
          <div className="cut "></div>
          <label for="password" className="placeholder">
            Password
          </label>
        </div>
        <button type="text" className="submit">
          Sign Up
        </button>
        <h4 className="text-color">Create New Account ?</h4>
        <Link to="/signup " className="text-color">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Login;
