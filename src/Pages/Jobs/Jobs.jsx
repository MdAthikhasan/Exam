import React, { useContext, useEffect, useState } from "react";

import Job from "./Job";
import "./job.css";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseAuth from './../../Firebase/firebase';
const Jobs = () => {
  const [serverData, setServerData] = useState(useLoaderData());
  const [user]= useAuthState(firebaseAuth)
  // const jobdatas = ;
  const { searchVale } = useContext(MyContext);
  useEffect(() => {
    const filterd = serverData?.filter((item) =>
      item.title?.toLowerCase().includes(searchVale.toLowerCase())
    );
    setServerData(filterd);
  }, [searchVale]);

  if (!user) {
     
  }

  return (
    <div className="jobs">
      {serverData?.length > 0 &&
        serverData.map((jobdata) => (
          <Job key={jobdata?.id} jobdata={jobdata} />
        ))}
    </div>
  );
};

export default Jobs;
