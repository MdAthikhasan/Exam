import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import firebaseAuth from "../../../Firebase/firebase";
import Swal from "sweetalert2";
import Loading from "./../../../Component/Loading/Loading";
const Signin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(firebaseAuth);
  console.log(user);
  console.log(error);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return Swal.fire({
      title: `Invalid Email or  Password`,
      text: "",
      icon: "warning",
    });
  }
  if (user) {
    Swal.fire({
      title: "successfully login done!",
      text: "",
      icon: "success",
    });
    navigate("/");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const { email, password } = loginData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return Swal.fire({
        title: "Fill up the input box",
        text: "",
        icon: "warning",
      });
    }
    await signInWithEmailAndPassword(email, password);
    setLoginData({ email: "", password: "" });
  };

  return (
    <div className="form">
      <h4>
        New to here ? <Link to={"/sign"}> Sign Up</Link>
      </h4>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ padding: "15px" }}>
          <legend style={{ fontSize: "25px" }}>
            &nbsp;&nbsp;Sign-In&nbsp;&nbsp;
          </legend>

          <label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter email or phone number"
              onChange={handleChange}
              value={loginData?.email}
            />
          </label>
          <br />
          <label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={loginData?.password}
            />
          </label>
          <br />

          <button className="button" type="submit">
            Sign-in
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
