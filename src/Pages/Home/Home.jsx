import React, { useContext, useState } from "react";
import Images from "./Images/jobs.jpg";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../../Firebase/firebase";
import JobForm from "../../Component/Apply/JobForm";
import Loading from "../../Component/Loading/Loading";
import { MyContext } from "../../Context/Context";
import Swal from "sweetalert2";
const Home = () => {
  const { isTrue, setIsTrue } = useContext(MyContext);
  const [user, authLoading] = useAuthState(firebaseAuth);

  if (authLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={!isTrue ? "home" : "home_overlay"}>
        <div className="left-side">
          <h1 className="title">
            Build your careear in{" "}
            <span className="text">Halal Path, God will help you</span> <br />{" "}
            in your job journey
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={!user ? "/sign_up" : "/jobs"}>
              <button className="btn">Explore now</button>
            </Link>
            <Link>
              <button
                onClick={() => {
                  if (!user) {
                    Swal.fire({
                      title: "Please sign_up !",
                      icon: "warning",
                    });
                  } else {
                    setIsTrue(true);
                  }
                }}
                className="btn"
              >
                Post job
              </button>
            </Link>
          </div>
        </div>
        <img className="home-image" src={Images} alt="" />
      </div>
      {isTrue && <JobForm />}
    </div>
  );
};

export default Home;
