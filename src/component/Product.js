import React from "react";
import { Card, CardMedia, CardContent, Typography, Link } from '@mui/material';

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
                    <Typography gutterBottom variant="p" component="div">
                        {product.name}
                    </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                    {`${product.rating} from ${product.numReviews} reviews`}
                </Typography>
                <Typography variant="h5" color="black">
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