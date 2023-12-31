import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillTag } from "react-icons/ai";
import { CiTrophy } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import "./jobDetails.css";
const JobDetails = () => {
  const data = useLoaderData();

  return (
    <div className="jobcardDetails">
      <p className="borderbtm">
        <img
          style={{
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            cursor: "pointer",
          }}
          src={data?.logo}
          alt=""
        />
        <p>
          <h3>{data.website}</h3>
          <h3 style={{ color: "green" }}>{data?.companyName}</h3>
          <p style={{ display: "flex", alignItems: "center" }}>
            <IoLocationSharp className="icon" />
            {data?.location}
          </p>
        </p>
      </p>
      <br />
      <h1 style={{ textAlign: "center", margin: "5px", color: "blue" }}>
        About Company
      </h1>{" "}
      <br />
      {/* <h2>{data?.title}</h2> <br /> */}
      <p style={{ lineHeight: "25px", fontSize: "18px", fontWeight: "400",borderBottom:'1px solid black',paddingBottom:"20px" }}>
        {data?.description}
      </p>
          <div className="jobrequirment">
             h
      </div>
      <div className="social-icons">
        <p>
          <AiFillTwitterCircle className="icon2" />
          <CiLinkedin className="icon2" />
          <FaFacebook className="icon2" />
          <AiFillGoogleCircle className="icon2" />
          <AiFillAndroid className="icon2" />
        </p>
        <p>
          <MdOutlineFavorite className="icon2" />
          <TiDeleteOutline className="icon2" />
          <FaEdit className="icon2" />
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
