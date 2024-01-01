// src/components/JobForm.js
import React, { useContext, useState } from "react";

import "../Apply/jobForm.css";
import { MyContext } from "../../Context/Context";
import axios from "axios";
// import axios from "axios";
const EditForm = () => {
  const { Edit, setIsEdit } = useContext(MyContext);
  // console.log(Edit);
  const [newInput, setNewInput] = useState(Edit);

  const { title, logo, companyName, position, location, description, id } =
    newInput;
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value);
    // const { name, value } = e.target.name;
    setNewInput((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:9000/jobs/${id}`, newInput);
    } catch (error) {
      console.log(error);
    }

    setNewInput({
      title: "",
      logo: "",
      comname: "",
      position: "",
      location: "",
      description: "",
    });
  };
 
  return (
    <div style={{ background: "green" }} className="jobform">
      <h2>
        Edit Application Form <span onClick={() => setIsEdit(false)}>❌</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="inputjob"
            name="title"
            type="text"
            value={title || ""}
            placeholder=" Job Title"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            className="inputjob"
            name="logo"
            type="text"
            value={logo || ""}
            placeholder="  Company Logo"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            className="inputjob"
            type="text"
            name="companyName"
            value={companyName || ""}
            placeholder=" Company name"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            className="inputjob"
            type="text"
            name="position"
            value={position || ""}
            placeholder="Position"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className="inputjob"
            type="text"
            name="location"
            value={location || ""}
            placeholder=" Location"
            onChange={handleChange}
          />
        </label>

        <label>
          <textarea
            className="textare"
            name="description"
            value={description || ""}
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

export default EditForm;

//**
//    {
//       "id": 1,
//       "title": "Google Internship Program",
//       "logo": "https://shorturl.at/iwyR7",
//       "companyName": "Google",
//       "position": "Intern Developer",
//       "location": "Dhaka",
//       "description": "Established in 2000, Bdjobs.com Limited has been operating the largest online employment exchange of Bangladesh for the last 22 years. www.bdjobs.com is one of the most visited web sites in the country. It is also among the top five (5) most visited job portals in South Asia. Currently the company offers the following position for immediate recruitment."
//     },
// * /
