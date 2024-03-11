import React from "react";
import "./CartItems.scss";
import { useContext } from "react";
import { shopContext } from "./../../Context/ShopContext";
import remove from "../Assets/cart_cross_icon.png";
export default function CartItems() {
  const { getTotalPrice, all_product, cartItems, removeFromCart } =
    useContext(shopContext);
  return (
    <div className="CartItems">
      <div className="cartitems-main">
        <p>Product</p>
        <p>title</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="caritems-format cartitems-main" key={e.id}>
                <img src={e.image} alt="" className="cart-items" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart-items-remove"
                  src={remove}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>

          <div>
            <div className="cart-totl-item">
              <p>SubTotol</p>
              <p>${getTotalPrice()}</p>
            </div>

            <hr />

            <div className="cart-totl-item">
              <p>Shipping free</p>
              <p>free</p>
            </div>

            <hr />
            <div className="cart-totl-item">
              <h3>Total</h3>
              <p>${getTotalPrice()}</p>
            </div>
          </div>
          <button>PROCCED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>If you have promocaod</p>
          <div className="promo-box">
            <input type="text" placeholder="enter here" />
            <button>Sumbit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
