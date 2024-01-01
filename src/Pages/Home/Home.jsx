import React, { useState } from "react";
import Images from "./Images/jobs.jpg";
import "./home.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../../Firebase/firebase";
import JobForm from "../../Component/Apply/JobForm";
const Home = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [user] = useAuthState(firebaseAuth);
  return (
    <div>
      <div className={!isTrue ? "home" : "home overlay"}>
        <div className="left-side">
          <h1 className="title">
            Build your careear in{" "}
            <span style={{ color: "green" }}>
              halal path the career compass finding north
            </span>{" "}
            in Your Job Journey
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={!user ? "/sign" : "/jobs"}>
              <button className="btn">Explore now</button>
            </Link>
            <Link>
              <button onClick={() => setIsTrue(!isTrue)} className="btn">
                {!isTrue ? "Haier Now" : "Go back"}
              </button>
            </Link>
          </div>
        </div>
        <img className="home-image" src={Images} alt="" />
        {isTrue ? (
          <div>
            <JobForm />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
