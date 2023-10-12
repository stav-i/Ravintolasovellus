import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageStaff = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Manage staff
        </Typography>
    )
}

export default ManageStaff;