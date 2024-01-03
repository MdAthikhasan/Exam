import React, { useContext, useEffect, useState } from "react";

import Job from "./Job";
import "./job.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import firebaseAuth from "../../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Jobs = () => {
  const [serverData, setServerData] = useState(useLoaderData());
  const navigate = useNavigate();
  const [user, authLoading, error] = useAuthState(firebaseAuth);
 
  useEffect(() => {
    const fetchData = () => {
      setServerData(serverData);
    };
    fetchData();
  }, [serverData]);
 
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
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  if (!user) {
    return navigate("/sign");
  }

  const { searchVale } = useContext(MyContext);
  useEffect(() => {
    const filterd = serverData?.filter((item) =>
      item.title?.toLowerCase().includes(searchVale.toLowerCase())
    );
    setServerData(filterd);
  }, [searchVale]);

  return (
    <div className="jobs">
      {serverData?.length > 0 &&
        serverData.map((jobdata) => (
          <Job key={jobdata?.id} func={func} jobdata={jobdata} />
        ))}
    </div>
  );
};

export default Jobs;
