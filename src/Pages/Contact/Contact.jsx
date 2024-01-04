// Contact.js

import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <header>
        <h1>Contact Us</h1>
      </header>

      <section>
        <p>
          If you have any questions or feedback, feel free to reach out to us:
        </p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>
          Alternatively, you can email us at:{" "}
          <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Contact;
