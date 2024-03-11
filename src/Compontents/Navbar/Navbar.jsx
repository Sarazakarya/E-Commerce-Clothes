import React, { useContext, useState } from "react";
import "./Navbar.scss";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $user } from "../../Store/Store";
import { shopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const [menu, setMenu] = useState();
  const { getCarItem } = useContext(shopContext);
  return (
    <div className="Nav-Sec">
      <div className="Nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>

        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/Men" style={{ textDecoration: "none" }}>
            Men {menu == "Men" ? <hr /> : <></>}
          </Link>
        </li>

        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/Women" style={{ textDecoration: "none" }}>
            {" "}
            Women{menu == "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/Kids" style={{ textDecoration: "none" }}>
            {" "}
            Kid {menu == "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/Sign">
          <button>login</button>
        </Link>
        <Link to="Cart">
          <img src={cart} alt="cart" />
        </Link>
        <div className="divnav-card-counter">{getCarItem()}</div>
      </div>
    </div>
  );
}
