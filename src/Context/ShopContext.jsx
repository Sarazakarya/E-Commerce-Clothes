import React, { createContext, useState } from "react";
import all_product from "./../Compontents/Assets/all_product";

export const shopContext = createContext(null);

const getDefaultValue = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultValue());
  const AddToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let iteminfo = all_product.find(
          (product) => product.id === Number(itemId)
        );
        totalPrice += iteminfo.new_price * cartItems[itemId];
      }
    }
    return totalPrice;
  };
  const getCarItem = () => {
    let totalitem = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalitem += cartItems[itemId];
      }
    }
    return totalitem;
  };

  const contextValue = {
    getCarItem,
    all_product,
    cartItems,
    AddToCart,
    removeFromCart,
    getTotalPrice,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
