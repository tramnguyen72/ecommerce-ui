import React from "react";
import { Card, CardMedia, CardContent, Typography, Link } from '@mui/material';
import { Rating } from "./Rating";

export const Product = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 250, marginRight: 5, marginBottom: 5 }} variant="outlined">
            <Link href={`/product/${product._id}`}>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                />
            </Link>
            <CardContent>
                <Link href={`/product/${product._id}`}>
                    <Typography gutterBottom variant="p" component="div" style={{ minHeight: 55 }}>
                        {product.name}
                    </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#fee227'} />
                </Typography>
                <Typography variant="h5" color="black" style={{ marginTop: 3 }}>
                    {`$${product.price}`}
                </Typography>           
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    )
};