// src/components/JobForm.js
import React, { useState } from "react";
 import './jobForm.css'
const JobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, such as sending it to a server

    // For this example, let's just log the data to the console
    console.log("Job Title:", jobTitle);
    console.log("Job Description:", jobDescription);
    console.log("Location:", location);
    console.log("Salary:", salary);
  };

  return (
    <div className="jobform">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            className="inputjob"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>

        <label>
          Job Description:
          <textarea
            className="textare"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </label>

        <label>
          Location:
          <input
            className="inputjob"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Salary:
          <input
            className="inputjob"
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
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
