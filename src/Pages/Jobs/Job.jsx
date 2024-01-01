import React, { useContext, useState } from "react";
import { CiTrophy } from "react-icons/ci";
import { AiFillTag } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context/Context";
const Job = ({ jobdata }) => {
  const { title, logo, id, companyName, location } = jobdata;
  // const [filter, setFilter] = useState()
   const { handleFavourite } = useContext(MyContext);
//   const handleFavourite = () => {
//     setData([...data,id]);
    
//  }



  return (
    <>
      <div className="jobcard">
        <Link style={{ background: "none" }} to={`/jobs/${id}`}>
          <div>
            <p className="borderbtm">
              we are looking for
              <img
                style={{
                  marginLeft: "8px",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
                src={logo}
                alt=""
              />
            </p>{" "}
            <br />
            <h2>{title}</h2> <br />
            <h3 style={{ color: "blue" }}>{companyName}</h3>
          </div>
        </Link>
        <div className="icons">
          <p>
            <CiTrophy className="icon1" />
            1235
          </p>
          <p>
            <AiFillTag className="icon" />
            Product development
          </p>
          <p>
            <IoLocationSharp className="icon" />
            {location}
          </p>
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
            <MdOutlineFavorite
              onClick={() => handleFavourite(id)}
              className="icon2"
            />
            <TiDeleteOutline className="icon2" />
            <FaEdit className="icon2" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Job;
