import React, { useContext, useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
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
import "../Jobs/job.css";
import "./favourite.css";
import Swal from "sweetalert2";
import axios from "axios";
const Favourite = () => {
  const [serverDatas, setServerData] = useState(useLoaderData());
  useEffect(() => {
    setServerData(serverDatas);
  }, [serverDatas]);
  const favDeletHandle = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:9000/jobs/${id}`);
      Swal.fire({
        title: "Deleted from favorite!",
        icon: "warning",
      });
    } catch (error) {
      Swal.fire({
        title: "Something is wrong!",
        icon: "warning",
      });
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
        marginTop:"80px"
      }}
    >
      {serverDatas.length > 0 ? (
        serverDatas.map((mapvalue) => {
          return (
            mapvalue.isFavourite == true && (
              <div key={mapvalue?.id} className="jobcard">
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
                      src={mapvalue?.logo}
                      alt=""
                    />
                  </p>{" "}
                  <br />
                  <h2>{mapvalue?.title}</h2> <br />
                  <h3 style={{ color: "blue" }}>{mapvalue?.companyName}</h3>
                </div>

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
                    {mapvalue?.location}
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
                      onClick={() => favDeletHandle(mapvalue.id)}
                      className="icon3"
                    />
                    <TiDeleteOutline className="icon2" />
                    <FaEdit className="icon2" />
                  </p>
                </div>
              </div>
            )
          );
        })
      ) : (
        <h1>No Favourite added</h1>
      )}
    </div>
  );
};

export default Favourite;
