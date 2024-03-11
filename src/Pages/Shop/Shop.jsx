import React from "react";
import Hero from "./../../Compontents/Hero/Hero";
import Popular from "../../Compontents/Popular/Popular";
import Offers from "../../Compontents/Offers/Offers";
import NewCollection from "./../../Compontents/NewCollection/newCollection";
import NewLetter from "./../../Compontents/NewLetter/newLetter";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewLetter />
    </div>
  );
}
