import React from "react";
import "./newCollection.scss";
import new_Collection from "../Assets/new_collections";
import Item from "../Item/Item";
export default function NewCollection() {
  return (
    <div className="new-colletion">
      <h1>NEW COLLECTION</h1>
      <div className="collection">
        {new_Collection.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
