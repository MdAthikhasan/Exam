import React, { useContext, useState } from "react";
import { CiTrophy } from "react-icons/ci";
import { AiFillTag } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import axios from "axios";
import EditForm from "../../Component/EditForm/EditForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Job = ({ jobdata }) => {
  const { title, logo, id, companyName, location ,isFavourite} = jobdata;
 
  const { setEdit, isEdit, setIsEdit } = useContext(MyContext);

  const handleFavourite = (obj) => {
    const status = obj?.isFavourite == "undefined" ? false : !obj.isFavourite;
    let setobj = {
      ...obj,
      isFavourite:status
    }
    try {
      axios.put(`http://localhost:9000/jobs/${obj.id}`, setobj);
        toast.success("Added  to  favourite");
    } catch (error) {
      console.log("favourite", error);
    }
  };
  const handeleDeleteFavourite = (jobData) => {
    let setobj = {
      ...jobData,
      isFavourite:false,
    };
    try {
      axios.put(`http://localhost:9000/jobs/${jobData.id}`, setobj);
      toast.error("Removed from favourite");
    } catch (error) {
      console.log("favourite", error);
    }
}
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${id}`);
    } catch (error) {
      console.error("Error deleting job:", error.message);
    }
  };
  const handleEdit = (id) => {
    if (jobdata.id == id) {
      setEdit(jobdata);
    }
  };
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
            </p>
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
            {isFavourite ? (
              <MdOutlineFavorite
                className="icon2"
                onClick={() => {
                  handeleDeleteFavourite(jobdata)
                  ;
                }}
              />
            ) : (
              <MdOutlineFavoriteBorder
                onClick={() => {
                    handleFavourite(jobdata);
                    
                }}
                className="icon2"
              />
            )}

            <TiDeleteOutline
              onClick={() => handleDelete(id)}
              className="icon2"
            />
            <FaEdit
              onClick={() => {
                handleEdit(id);
                setIsEdit(true);
              }}
              className="icon2"
            />
          </p>
        </div>
        {isEdit && <EditForm />}
      </div>
    </>
  );
};

export default Job;
