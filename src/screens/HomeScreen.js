import React from "react";
import products from "../DummyProduct";

export const HomeScreen = () => {
  return (
    <div>
      <h2>LATEST PRODUCT</h2>
      {products.map((item) => (
        <p>{item.name}</p>
      ))};
    </div>
  )
};