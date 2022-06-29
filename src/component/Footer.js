import React from 'react';
import { Grid } from '@mui/material';

/* eslint-disable import/prefer-default-export */

export const Footer = () => {
  const a = 1;
  console.log(a);
  return (
    <footer style={{ marginTop: 'auto' }}>
      <Grid container justifyContent="center">
        <p>Copyright &copy; ProShop$</p>
      </Grid>
    </footer>
  );
};
