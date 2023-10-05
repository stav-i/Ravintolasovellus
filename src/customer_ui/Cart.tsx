import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Shopping cart
        </Typography>
    )
}

export default Cart;