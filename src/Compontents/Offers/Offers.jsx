import React from "react";
import "./Offers.scss";
import exclusive from "../Assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className="offers ">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only ON Best Seller Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
}
