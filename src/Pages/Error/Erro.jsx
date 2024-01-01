import React from "react";
import image from "./image/error.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Erro = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <img
        style={{ width: "100%", height: "100vh", position: "relative" }}
        src={image}
        alt=""
      />
      <button
        onClick={() => navigate(-1)}
        style={{
          display: "block",
          padding: "9px 35px",
          background: "blue",
          border: "none",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          borderRadius: "6px",
          bottom: "3%",
          right: "50%",
        }}
      >
        Go Back
      </button>

      <button
        onClick={() => navigate("/")}
        style={{
          display: "block",
          padding: "9px 35px",
          background: "blue",
          border: "none",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          borderRadius: "6px",
          bottom: "3%",
          right: "39%",
        }}
      >
        {/* <Navigate to={"/"}/> */}
        {/* <Link to={"/"}></Link> */}
        Go Home
      </button>
    </div>
  );
};

export default Erro;
