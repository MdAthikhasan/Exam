import React, { useState } from "react";
import "./sign.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import firebaseAuth from "../../../Firebase/firebase";
import { toast } from "react-toastify";
import { AiFillCalculator } from "react-icons/ai";
import Swal from "sweetalert2";

const Sign = () => {
  const [createUserWithEmailAndPassword, euser, eloading, eerror] =
    useCreateUserWithEmailAndPassword(firebaseAuth);
  const [signInWithGoogle, guser, gloading, gerror] =
    useSignInWithGoogle(firebaseAuth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmpassword) {
      Swal.fire({
        title: "Fill up the input box",
        text: "",
        icon: "warning",
      });
    }
    else if (password == confirmpassword) {
      createUserWithEmailAndPassword(email, password);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmpassword:"",
      });
      navigate("/");
        Swal.fire({
          title: "Sign-up successfully done",
          text: "",
          icon: "success",
        });
    } else {
       Swal.fire({
         title: "Password dont matched",
         text: "",
         icon: "warning",
       });
    }
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
          <button className="button" type="submit">
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Sign;
