import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div className="form">
        <div className=" title">Welcome !!</div>
        <div className="subtitle"></div>

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
        <h4 className="text-color">Already Have An Account ? </h4>
        <Link to="/login" className="text-color">
          Login
        </Link>
      </div>
    </>
  );
};

export default SignUp;
