import React from 'react'
import './foote.css'
const Footer = () => {
  return (
    <div >
      <footer>
        <div class="footer-section">
          <h2>Contact Us</h2>
          <p>Email:mdathikhasna136@gmail.com</p>
          <p>Phone:01824990037</p>
        </div>

        <div class="footer-section">
          <h2>Quick Links</h2>
          <ul class="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h2>Follow Us</h2>
          <ul class="footer-social">
            <li>
              <a href="#" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer