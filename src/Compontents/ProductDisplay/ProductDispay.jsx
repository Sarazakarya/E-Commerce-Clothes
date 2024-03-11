import React, { useContext } from "react";
import "./Product.scss";
import star from "../Assets/star_icon.png";
import mainStar from "../Assets/star_dull_icon.png";
import { shopContext } from "../../Context/ShopContext";
export default function ProductDispay(props) {
  const { product } = props;
  const { AddToCart } = useContext(shopContext);
  return (
    <div className="ProductDispay">
      <div className="Product-left">
        <div className="img-left">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div>
          <img src={product.image} alt="" className="product-main" />
        </div>
      </div>

      <div className="Product-right">
        <h1>{product.name}</h1>
        <div className="star-img">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={mainStar} alt="" />
          <p>(122)</p>
        </div>
        <div className="prouduct-price">
          <div className="product-oldPrice">${product.old_price}</div>
          <div className="product-newPrice">${product.new_price}</div>
        </div>
        <div className="right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto.
        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className="right-sizes">
            <div>S</div>
            <div>M</div>
            <div>Xl</div>
            <div>XXl</div>
          </div>
        </div>
        <button onClick={() => AddToCart(product.id)}>Add To Cart</button>
        <p className="product-category">
          <span>Category :</span> Woman ,T-shirt,Crop TOP
        </p>
        <p className="product-category">
          <span>Tags :</span> Modern ,T-shirt,Crop TOP
        </p>
      </div>
    </div>
  );
}
