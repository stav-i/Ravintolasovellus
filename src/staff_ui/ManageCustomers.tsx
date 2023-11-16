import { Box, Container, Typography, Grid, List, ListItem } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageCustomers = () => {
    const navigoi = useNavigate();

    return (
        <Grid
            sx={{
                bgcolor: 'lightblue'
            }}>
            
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 2
                }}>
            <Typography>
            Manage customers
            </Typography>
            </Stack>
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 5
                }}>
            <List
                sx={{
                    width:'100%',
                    maxWidth: 600,
                    bgcolor: 'gray',
                    overflow: 'auto',
                    maxHeight: 300
                }}>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
                    <ListItem>Listitem</ListItem>
            </List>
            </Stack>
        </Grid>
    )
}

export default ManageCustomers;