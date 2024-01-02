import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import firebaseAuth from "../../../Firebase/firebase";
 
const Sign = () => {
  const [createUserWithEmailAndPassword, euser, eloading, eerror] =
    useCreateUserWithEmailAndPassword(firebaseAuth);
  const [signInWithGoogle, guser, gloading, gerror] =
    useSignInWithGoogle(firebaseAuth);

  // if (guser) {
  //     // console.log(guser)
  //   }
  // if (gloading) {
  //   // console.log(gloading);
  // }
  // if (gerror) {
  //   // console.log(gerror);
  // }
  // if (euser) {
  //   console.log(euser);
  // }
  // if (eloading) {
  //   // console.log(eloading);
  // }
  // if (eerror) {
  //   // console.log(eerror);
  // }
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ username: "", email: "", password: "", confirmpassword: "" });
  };

  return (
    <div className="form">
      <h4>
        Already have an account? <Link to={"/signin"}> Sign-In</Link>
      </h4>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ padding: "15px" }}>
          <legend style={{ fontSize: "25px" }}>
    
            &nbsp;&nbsp;Sign Up &nbsp;&nbsp;
          </legend>
          <label>
            <input
              className="input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </label>
          <br />
          <label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email or phone number"
            />
          </label>
          <br />
          <label>
            <input
              className="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </label>
          <br />
          <label>
            <input
              className="input"
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="ConfirmPassword"
            />
          </label>
          <br />
          <div onClick={() => signInWithGoogle()} className="withgoogle">
            <FcGoogle style={{ fontSize: "30px" }} />
            Sign up with google
          </div>
          <button
            onClick={() =>
              createUserWithEmailAndPassword(formData.email, formData.password)
            }
            className="button"
            type="submit"
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Sign;
