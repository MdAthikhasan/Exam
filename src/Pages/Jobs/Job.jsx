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
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import axios from "axios";
import EditForm from "../../Component/EditForm/EditForm";

import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Loading from "../../Component/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../../Firebase/firebase";

const Job = ({ jobdata, func }) => {
  const { title, logo, id, companyName, location, isFavourite } = jobdata;
const [user, authLoading, error] = useAuthState(firebaseAuth);
  const { setEdit, isEdit, setIsEdit } = useContext(MyContext);
 if (authLoading) {
   return <Loading />;
 }
 if (error) {
   console.log(error);
 }
 if (!user) {
   <Navigate to={"/sign"} />;
 } else {
   console.log("user ase");
 }
  const handeleFavourite = (obj) => {
    const status = obj?.isFavourite == "undefined" ? false : !obj.isFavourite;
    let setobj = {
      ...obj,
      isFavourite: status,
    };
    try {
      axios.put(`http://localhost:9000/jobs/${obj.id}`, setobj);
      if (!obj.isFavourite) {
        Swal.fire({
          title: "Added to favourite!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Removed from favourite!",
          icon: "warning",
        });
      }
    } catch (error) {
      console.log("favourite", error);
    }

    func(status, obj.id);
  };

  // const handeleDeleteFavourite = (jobData) => {
  //   func();
  //   let setobj = {
  //     ...jobData,
  //     isFavourite: false,
  //   };
  //   try {
  //     axios.put(`http://localhost:9000/jobs/${jobData.id}`, setobj);
  //     Swal.fire({
  //       title: "Removed from favourite!",
  //       icon: "success",
  //     });
  //   } catch (error) {
  //     console.log("favourite", error);
  //   }
  // };

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:9000/jobs/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
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
    <div>
      <div className={!isEdit ? "jobcard" : "blur"}>
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
            <AiFillTag className="icon1" />
            Product development
          </p>
          <p>
            <IoLocationSharp className="icon1" />
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
              className={isFavourite ? "icon3" : "icon2"}
              onClick={() => {
                handeleFavourite(jobdata);
              }}
            />

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
      </div>
      {isEdit && <EditForm />}
    </div>
  );
};

export default Job;
