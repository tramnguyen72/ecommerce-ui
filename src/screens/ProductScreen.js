import React from "react";
import { Link, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Rating } from "../component/Rating";
import products from "../DummyProduct";

export const ProductScreen = () => {
    const { id } = useParams();
    const product = products.find((item) => item._id === id);
    return (
        <div style={{ marginLeft: 70, marginTop: 30 }}>
            <Button
                variant="text"
                component={Link}
                to="/"
                color="inherit"
                style={{ fontSize: 20, marginBottom: 20 }}
            >
                <b>Go Back</b>
            </Button>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <img src={product.image} alt={product.name} />
            </Box>
        </div>
    )
};