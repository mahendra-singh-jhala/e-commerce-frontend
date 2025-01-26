import React, { useEffect } from 'react';
import { Typography, Avatar, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { getAllUser } from '../../../state/user/Action';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users);

    // useEffect hook to get all user
    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch])

    return (
        <Paper sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 3, margin: 4 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h6" component="h5" color="textPrimary" padding="10px" paddingX="20px" fontWeight="600">
                        Latest Customers
                    </Typography>
                </Grid>
                {users?.user?.length > 0 && users?.user?.map((user) => (
                    <Grid size={{ xs: 12 }} sx={{ bgcolor: "#192A56", padding: 4, border: "white" }} >
                        <Grid container spacing={2} alignItems="center">
                            <Grid size={{ xs: 1 }}>
                                <Avatar
                                    sx={{ bgcolor: "purple", color: "white", padding: 4 }}
                                >
                                    {user?.firstname[0].toUpperCase()}
                                </Avatar>
                            </Grid>
                            <Grid size={{ xs: 11 }} sx={{ color: "White" }}>
                                <Typography variant="body1" fontWeight="bold">
                                    {user?.firstname} {user?.lasttname}
                                </Typography>
                                <Typography variant="body2">
                                    {user?.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default User;

