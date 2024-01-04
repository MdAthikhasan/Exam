// src/components/JobForm.js
import React, { useContext, useState } from "react";
// import "./jobForm.css";
import './jobForm.css'
import axios from "axios";
import Swal from "sweetalert2";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MyContext } from "../../Context/Context";
const JobForm = () => {
  const {isTrue ,setIsTrue} = useContext(MyContext)
  const [formData, setFormData] = useState({
    title: "",
    logo: "",
    comname: "",
    position: "",
    location: "",
    description: "",
  });
 
  
  const { title, logo, comname, position, location, description } = formData;
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !logo || !comname || !position || !location || !description) {
      return Swal.fire({
        title: "Please fill up input box",
        icon: "warning",
      });
    }
   await axios
      .post("http://localhost:9000/jobs" , formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
      

    setFormData({
      title: "",
      logo: "",
      comname: "",
      position: "",
      location: "",
      description: "",
    });
  };
  return (
    <div className="jobform">
      <h2 className="formheading">
        Job Application Form{" "}
        <RiDeleteBack2Line onClick={()=>setIsTrue(false)} className="deleticon" />
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="inputjob"
            name="title"
            type="text"
            value={title}
            placeholder=" Job Title"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            className="inputjob"
            name="logo"
            type="text"
            value={logo}
            placeholder="  Company Logo"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            className="inputjob"
            type="text"
            name="comname"
            value={comname}
            placeholder=" Company name"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            className="inputjob"
            type="text"
            name="position"
            value={position}
            placeholder="Position"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className="inputjob"
            type="text"
            name="location"
            value={location}
            placeholder=" Location"
            onChange={handleChange}
          />
        </label>

        <label>
          <textarea
            className="textare"
            name="description"
            value={description}
            placeholder="   Description"
            onChange={handleChange}
          />
        </label>
        <button className="btn btncenter" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
