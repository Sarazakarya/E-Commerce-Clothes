import React from "react";
import "./BreadCrumbs.scss";
import arrow from "../Assets/breadcrum_arrow.png";

export default function BreadCrumbs(props) {
  const { product } = props;
  return (
    <div className="BreadCrumbs">
      Home
      <img src={arrow} alt="" />
      {product.category}
      <img src={arrow} alt="" />
      Shop
      <img src={arrow} alt="" />
      {product.name}
    </div>
  );
}
