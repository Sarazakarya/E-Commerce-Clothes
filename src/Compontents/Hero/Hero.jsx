import React from "react";
import "./Hero.scss";
import hand from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import girl from "../Assets/hero_image.png";
export default function Hero() {
  return (
    <div className="Hero ">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY </h2>

        <div className="hand-hand-icon">
          <div className="hand-icon">
            <p>new</p>
            <img src={hand} alt="" />
          </div>
          <p>Collection</p>
          <p>For EveryOne</p>
        </div>

        <div className="hero-letest-btn">
          <div>leatst Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={girl} alt="" />
      </div>
    </div>
  );
}
