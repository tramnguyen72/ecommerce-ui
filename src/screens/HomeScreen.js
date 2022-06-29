import React from 'react';
import products from '../DummyProduct';

/* eslint-disable import/prefer-default-export */

export const HomeScreen = () => {
  const productItem = products;
  return (
    <div style={{ marginLeft: 20 }}>
      <h2 style={{ color: 'red' }}>LATEST PRODUCT</h2>
      {productItem.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};
