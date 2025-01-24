import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Snackbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClick = () => {
        if (!auth.user) {
            setOpenSnackbar(true);
        } else {
            navigate(`/product/${product._id}`);
        }
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div onClick={handleClick}>
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


            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Please login first"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            />
        </div>
    );
}

export default ProductCard;
