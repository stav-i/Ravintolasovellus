import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const Sivu3 = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Sivu3
        </Typography>
    )
}

export default Sivu3;