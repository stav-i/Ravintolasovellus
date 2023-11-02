import { Box, Container, Typography, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageOrders = () => {
    const navigoi = useNavigate();

    return (
        <Grid sx={{
            backgroundColor: 'lightblue'
        }}>
            <Typography>
                Manage orders
            </Typography>

            


        </Grid>
    )
}

export default ManageOrders;