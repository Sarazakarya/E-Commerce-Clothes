import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../Compontents/BreadCrumps/BreadCrumbs";
import ProductDispay from "../../Compontents/ProductDisplay/ProductDispay";
import Description from "../../Compontents/DescriptionBox/Description";
import Popular from "./../../Compontents/Popular/Popular";

export default function Product() {
  const { all_product } = useContext(shopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrumbs product={product} />
      <ProductDispay product={product} />
      <Description />
      <Popular />
    </div>
  );
}
