import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageCustomers = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Manage customers
        </Typography>
    )
}

export default ManageCustomers;