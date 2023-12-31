import React from "react";

import Job from "./Job";
import "./job.css";
import { useLoaderData } from "react-router-dom";
const Jobs = () => {
  const jobdatas = useLoaderData();
 
  return (
    <div className="jobs">
      {jobdatas?.length > 0 &&
        jobdatas.map((jobdata) => <Job key={jobdata.id} jobdata={jobdata} />)}
    </div>
  );
};

export default Jobs;
