import React, { useState } from "react";
import Images from "./Images/jobs.jpg";
import "./home.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../../Firebase/firebase";
const Home = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [user] = useAuthState(firebaseAuth);
  return (
    <div>
      <div className="home">
        <div className="left-side">
          <h1 className="title">
            Buil your carear{" "}
            <span style={{ color: "green" }}>
              in halal path the career compass finding{" "}
            </span>{" "}
            north in Your Job Journey
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={!user ? "/sign" : "/jobs"}>
              <button className="btn">Explore now</button>
            </Link>
            <Link to={!user ? "/sign" : "/jobs"}>
              <button className="btn">Haier Now</button>
            </Link>
          </div>
        </div>
        <img className="home-image" src={Images} alt="" />
      </div>
    </div>
  );
};

export default Home;
