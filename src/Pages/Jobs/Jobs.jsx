import React, { useContext, useEffect, useState } from "react";

import Job from "./Job";
import "./job.css";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../../Context/Context";
const Jobs = () => {
  const [serverData, setServerData] = useState(useLoaderData());
  // const jobdatas = ;
  const { searchVale } = useContext(MyContext);
  useEffect(() => {
    const filterd = serverData?.filter((item) =>
      item.title?.toLowerCase().includes(searchVale.toLowerCase())
    );
    setServerData(filterd);
  }, [searchVale]);

//   if (!searchVale) {
//      setServerData(serverData);
// }





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
