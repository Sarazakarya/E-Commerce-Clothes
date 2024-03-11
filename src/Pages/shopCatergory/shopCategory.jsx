import React, { useContext } from "react";
import "./shopCategory.scss";
import { shopContext } from "./../../Context/ShopContext";
import dropDown from "../../Compontents/Assets/dropdown_icon.png";
import Item from "../../Compontents/Item/Item";

export default function ShopCategory(props) {
  const { all_product } = useContext(shopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} className="shop-category-banner" />

      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out Of 36 Product
        </p>

        <div className="shopCategory-sort">
          Sort by <img src={dropDown} alt="" />
        </div>
      </div>

      <div className="shopCategory-Products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopCategory-load">Exlore More</div>
    </div>
  );
}
