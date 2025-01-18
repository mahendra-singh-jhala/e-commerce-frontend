import React from 'react';
import Achievement from "./Achivement";
import Grid from '@mui/material/Grid2';
import MonthlyOverview from "./MonthlyOverview";
import Products from '../product/Products';
import Order from '../order/Order';

const Dashboard = () => {
    return (
        <Grid container spacing={2} sx={{ my: 4, width: "100%", px:4}}>
            <Grid size={{ xs: 12, md: 4}}>
                <Achievement />
            </Grid>
            <Grid size={{ xs: 12, md: 8}}>
                <MonthlyOverview />
            </Grid>
            <Grid size={{ xs: 12, md: 6}}>
                <Products />
            </Grid>
            <Grid size={{ xs: 12, md: 6}}>
                <Order />
            </Grid>
        </Grid>
    );
};

export default Dashboard;