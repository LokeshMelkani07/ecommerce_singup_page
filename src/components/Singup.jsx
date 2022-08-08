import React from "react";
import "../signup.css";
import Inputs from "./inputs";

const Singup = () => {
  return (
    <div className="main_div">
      <div className="signup_heading">
        <h2>Create a New Account</h2>
      </div>
      <Inputs />
    </div>
  );
};

export default Singup;
