import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const Sivu2 = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Sivu2
        </Typography>
    )
}

export default Sivu2;