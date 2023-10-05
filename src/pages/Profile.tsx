import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Profiili
        </Typography>
    )
}

export default Profile;