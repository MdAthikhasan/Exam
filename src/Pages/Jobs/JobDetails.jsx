import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillTag } from "react-icons/ai";
import { CiTrophy } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import "./jobDetails.css";
const JobDetails = () => {
  const data = useLoaderData();

  return (
    <div className="jobcardDetails">
      <p className="borderbtm">
        <img
          style={{
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            cursor: "pointer",
          }}
          src={data?.logo}
          alt=""
        />
        <p>
          <h3>{data.website}</h3>
          <h3 style={{ color: "green" }}>{data?.companyName}</h3>
          <p style={{ display: "flex", alignItems: "center" }}>
            <IoLocationSharp className="icon" />
            {data?.location}
          </p>
        </p>
      </p>
      <br />
      <h1 style={{ textAlign: "center", margin: "5px", color: "blue" }}>
        About Company
      </h1>{" "}
      <br />
      {/* <h2>{data?.title}</h2> <br /> */}
      <p
        style={{
          lineHeight: "25px",
          fontSize: "18px",
          fontWeight: "400",
          borderBottom: "1px solid black",
          paddingBottom: "20px",
        }}
      >
        {data?.description}
      </p>
      <div className="jobrequirment">
        <br></br>
        <h3>Education and Qualifications:</h3><br />
        <p>
          Bachelor's degree in Computer Science, Information Technology, or a
          related field. Relevant certifications (e.g., Web Developer
          Certification, Front-End/Back-End Development Certification).
          Programming Languages:
        </p>{" "}
        <br />
        <h3>Programming Languages:</h3><br />
        <p>
          Proficiency in core web development languages such as HTML, CSS, and
          JavaScript. Knowledge of server-side programming languages like PHP,
          Python, Ruby, or Node.js. Familiarity with database languages like
          SQL. Web Technologies:
        </p>
        <br />
        <h3> Web Technologies:</h3><br />
        <p>
          Experience with web development frameworks (e.g., React, Angular,
          Vue.js for front-end; Django, Flask, Laravel for back-end).
          Understanding of RESTful APIs and web services. Version Control/Git:
        </p>
        <br />
      </div>
      <div className="social-icons">
        <p>
          <AiFillTwitterCircle className="icon2" />
          <CiLinkedin className="icon2" />
          <FaFacebook className="icon2" />
          <AiFillGoogleCircle className="icon2" />
          <AiFillAndroid className="icon2" />
        </p>
        <button className="apply">Apply now</button>
        <p>
          <MdOutlineFavorite className="icon2" />
          <TiDeleteOutline className="icon2" />
          <FaEdit className="icon2" />
        </p>
      </div>
    </div>
  );
};

export default JobDetails;



/**
 * 
 * Education and Qualifications:

Bachelor's degree in Computer Science, Information Technology, or a related field.
Relevant certifications (e.g., Web Developer Certification, Front-End/Back-End Development Certification).
Programming Languages:

Proficiency in core web development languages such as HTML, CSS, and JavaScript.
Knowledge of server-side programming languages like PHP, Python, Ruby, or Node.js.
Familiarity with database languages like SQL.
Web Technologies:

Experience with web development frameworks (e.g., React, Angular, Vue.js for front-end; Django, Flask, Laravel for back-end).
Understanding of RESTful APIs and web services.
Version Control/Git:

Proficient in using version control systems, particularly Git.
Responsive Design:

Knowledge of responsive web design principles.
Experience with CSS frameworks like Bootstrap or Tailwind CSS.
Cross-Browser Compatibility:

Ability to ensure compatibility and consistent rendering across various browsers.
Web Performance Optimization:

Understanding of techniques to optimize web page loading and rendering times.
Testing and Debugging:

Familiarity with testing frameworks (e.g., Jest, Mocha) and debugging tools.
Knowledge of unit testing and integration testing.
Security Best Practices:

Awareness of web security best practices and common vulnerabilities.
Implementation of secure coding techniques.
Build Tools and Package Managers:

Experience with build tools like Webpack and task runners like Gulp.
Proficiency in using package managers such as npm or yarn.
Databases:

Knowledge of database management systems (e.g., MySQL, PostgreSQL, MongoDB).
Ability to design and optimize database schemas.
Web Servers:

Experience with configuring and managing web servers (e.g., Apache, Nginx).
Communication and Collaboration:

Strong communication skills, as web developers often work closely with other team members, including designers and project managers.
Ability to collaborate using version control systems and collaboration tools.
Problem-Solving Skills:

Strong analytical and problem-solving skills to troubleshoot and debug issues effectively.
Continuous Learning:

Demonstrated commitment to staying updated on the latest web development trends and technologies.
 */