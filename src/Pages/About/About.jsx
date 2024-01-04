import React from "react";
  import "./about.css" 
const About = () => {
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
      </header>

      <section>
        <p>
          Welcome to our website! We are a team of passionate individuals
          dedicated to...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          odio felis...
        </p>
      </section>

      <section>
        <h2>Our Team</h2>
        <p>Meet the people behind our website:</p>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
        </ul>
      </section>

      <footer>
        <p>
          Contact us at: <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </footer>
    </div>
  );
};

export default About;
