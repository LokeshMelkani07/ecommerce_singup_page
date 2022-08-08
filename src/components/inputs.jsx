import React, { useState } from "react";
import signupimages from "../images/signup.png";

const Inputs = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  return (
    <>
      <div className="center_div">
        <div className="left_part">
          <form id="form_fill" className="form_fill" onSubmit={handleSubmit}>
            <div className="firstname">
              <div className="input_fields">
                <label htmlFor="firstname">First Name</label>
                <div className="input_material_icon">
                  <i className="zmdi zmdi-account"></i>
                  <input
                    type="text"
                    id="firstname"
                    size="50"
                    name="firstname"
                    autoComplete="off"
                    value={setUser.firstname}
                    onChange={handleInputs}
                  />
                </div>
              </div>
            </div>
            <div className="input_fields">
              <label htmlFor="lastname">Last Name</label>
              <div className="input_material_icon">
                <i className="zmdi zmdi-account"></i>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  size="50"
                  autoComplete="off"
                  value={setUser.lastname}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="input_fields">
              <label htmlFor="email">Your Email</label>
              <div className="input_material_icon">
                <i className="zmdi zmdi-email"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  size="50"
                  autoComplete="off"
                  value={setUser.email}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="input_fields">
              <label htmlFor="mobile">Your Mobile</label>
              <div className="input_material_icon">
                <i className="zmdi zmdi-phone"></i>
                <input
                  type="text"
                  id="mobile"
                  size="50"
                  name="mobile"
                  autoComplete="off"
                  value={setUser.mobile}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="input_fields">
              <label htmlFor="password">Password</label>
              <div className="input_material_icon">
                <i className="zmdi zmdi-shield-security"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  size="50"
                  autoComplete="off"
                  value={setUser.password}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="input_fields">
              <input
                type="password"
                id="confirm"
                size="54"
                placeholder="Confirm Pasword"
                autoComplete="off"
              />
            </div>
            <label className="container">
              <input type="checkbox" />
              Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
              <span className="checkmark"></span>
            </label>
            <div className="input_fields">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
        <div className="right_part">
          <div className="signup_image">
            <img src={signupimages} alt="" />
          </div>
          <div className="facebook_signup">
            <i className="zmdi zmdi-facebook"></i>
            <span>Signup With Facebook</span>
          </div>
          <div className="goggle_signup">
            <i className="zmdi zmdi-google"></i>
            <span>Signup With Goggle</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
