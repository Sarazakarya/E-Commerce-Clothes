import React from "react";
import "./newletter.scss";

export default function NewLetter() {
  return (
    <div className="newLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newLetter nd stay update</p>
      <div>
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
