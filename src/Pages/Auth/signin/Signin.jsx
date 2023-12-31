import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import firebaseAuth from "../../../Firebase/firebase";
const Signin = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password:''
        
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(firebaseAuth);
  const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ ...loginData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(loginData?.email, loginData?.password);
        setLoginData({ email: "", password: "" });

    }
    const navigate = useNavigate()
    if (user) {
        navigate('/')
    }
//   console.log(loginData?.email);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let email = e.target.email?.value;
//     let password = e.target.password?.value;
//     setLoginData({...loginData, email, password });

//     console.log("clicked");
//     await signInWithEmailAndPassword( email,password);
//     setLoginData({...loginData ,email:'', password:'' });
//   };

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
