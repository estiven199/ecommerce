import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
export default function Products() {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={0}>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
                <Grid item xs={16} sm={8} md={4} lg={2}>
                    <Product />
                </Grid>
            </Grid>
        </Box>
    );
}
