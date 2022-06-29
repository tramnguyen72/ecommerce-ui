import React from "react";
import { Box } from "@mui/material";
import { Product } from "../component/Product";
import products from "../DummyProduct";

export const HomeScreen = () => {
  return (
    <div style={{ marginLeft: 70 }}>
      <h2>LATEST PRODUCT</h2>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((item) => (
          <Product product={item} />
        ))};
      </Box>     
    </div>
  )
};