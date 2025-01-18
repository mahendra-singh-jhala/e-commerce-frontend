import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/product/${product?._id}`)}>
            <Card sx={{
                maxWidth: 300, borderRadius: 2, boxShadow: 3, margin: '10px', cursor: 'pointer',
                '&:hover': {
                    boxShadow: 8,
                },
            }}>
                <Link>
                    <CardMedia
                        component="img"
                        sx={{
                            width: '100%',
                            height: 320,
                            objectFit: 'cover',
                        }}
                        image={product.imageUrl}
                        alt="product image"
                    />
                </Link>
                <CardContent sx={{
                    bgcolor: 'white', transition: 'transform .3s ease-out',
                    '&:hover': {
                        transform: 'translateY(-1rem)',
                    },
                }}>
                    <Link>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', opacity: '0.8' }}>
                            {product.brand}
                        </Typography>
                        <Typography variant="p" sx={{ fontWeight: '600', color: 'gray' }}>
                            {product.title}
                        </Typography>
                    </Link>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginRight: '10px', textDecoration: 'line-through', opacity: "0.5" }}>
                                ₹{product.price}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                ₹{product.discountedPrice}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "green", fontWeight: 'bold', marginLeft: '10px' }}>
                                {product.discountPersent}% of
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProductCard;
