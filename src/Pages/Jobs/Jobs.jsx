import React, { useContext, useEffect, useState } from "react";

import Job from "./Job";
import "./job.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/Context";
 

const Jobs = () => {
  const [serverData, setServerData] = useState(useLoaderData());

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await useLoaderData();

  //   };
  //   setServerData(data)
  //   fetchData();
  // },[]);

  // if (authLoading) {
  //   return <Loading />;
  // }
  // if (!user) {
  //  return  navigate("/sign");
  // }

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
          <Job key={jobdata?.id} jobdata={jobdata} />
        ))}
    </div>
  );
};

export default Jobs;
