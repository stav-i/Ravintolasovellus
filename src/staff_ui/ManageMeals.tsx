import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageMeals = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Manage meals
        </Typography>
    )
}

export default ManageMeals;