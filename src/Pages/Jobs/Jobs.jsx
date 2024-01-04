import React, { useContext, useEffect, useState } from "react";

import Job from "./Job";
import "./job.css";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import firebaseAuth from "../../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Component/Loading/Loading";
import Swal from "sweetalert2";
import NetworkErrorPage from "../NetworkError/NetworkErro";

const Jobs = () => {
  const { searchVale } = useContext(MyContext);
  const [serverData, setServerData] = useState(useLoaderData());
  const [user, authLoading, error] = useAuthState(firebaseAuth);

  const location= useLocation()

  const func = (states, id) => {
    const a = serverData.map((data) => {
      if (data.id == id) {
        return {
          ...data,
          isFavourite: states,
        };
      }
      return data;
    });
    setServerData(a);
  };
  if (authLoading) {
    return  <Loading />;
  }
  if (error) {
   return  <NetworkErrorPage/>
  }
  if (!user) {
   return  <Navigate to={"/sign_up"} state={{ from: location }} replace />;
  }  

  useEffect(() => {
    setServerData((prevData) => {
      const filtered = prevData?.filter((item) =>
        item.title?.toLowerCase().includes(searchVale.toLowerCase())
      );
      return filtered;
    });
  }, [searchVale]);
  return (
    <div  className="jobs">
      {serverData?.length > 0 &&
        serverData.map((jobdata) => (
          <Job key={jobdata?.id} func={func} jobdata={jobdata} />
        ))}
    </div>
  );
};

export default Jobs;
