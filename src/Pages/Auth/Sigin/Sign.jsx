import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import firebaseAuth from "../../../Firebase/firebase";
import { toast } from "react-toastify";
import { AiFillCalculator } from "react-icons/ai";

const Sign = () => {
  const [createUserWithEmailAndPassword, euser, eloading, eerror] =
    useCreateUserWithEmailAndPassword(firebaseAuth);
  const [signInWithGoogle, guser, gloading, gerror] =
    useSignInWithGoogle(firebaseAuth);

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
 console.log(formData.password ,formData.confirmpassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password == formData.confirmpassword) {
      createUserWithEmailAndPassword(formData.email, formData.password);
       setFormData({
         username: "",
         email: "",
         password: "",
         confirmpassword: "",
       });
       alert("Sign uped successfully");
   toast.success("Sign uped successfully");
 } else {
      toast.error("Password dont matched");
      alert("Password dont matched");
 }
   
  };
  const handleGoogleSubmit = () => {
   
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
              placeholder="ConfirmPassword"
            />
          </label>
          <br />
          <div onClick={() => signInWithGoogle()} className="withgoogle">
            <FcGoogle style={{ fontSize: "30px" }} />
            Sign up with google
          </div>
          <button
            onClick={() => handleGoogleSubmit()}
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
