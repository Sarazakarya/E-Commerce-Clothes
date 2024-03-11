import React from "react";
import "./Footer.scss";
import Footer_Logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import pinerest from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Footer_Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-link">
        <li>Compny</li>
        <li>Product</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinerest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>

      <div className="copy-righter">
        <hr />
        <p>Copyright @2023</p>
      </div>
    </div>
  );
}
