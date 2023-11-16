import { Box, Container, Typography, Grid, List, ListItem, ListSubheader } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageOrders = () => {
    const navigoi = useNavigate();

    return (
        <Grid sx={{
            backgroundColor: 'lightblue'
        }}>
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 2
                }}>
            <Typography>
            Manage orders
            </Typography>
            </Stack>

            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 5
                }}
                direction={'row'}
                spacing={2}>
                    
            <List
                sx={{
                    width:'100%',
                    maxWidth: 600,
                    bgcolor: 'gray',
                    overflow: 'auto',
                    maxHeight: 300
                }}
                subheader={
                    <ListSubheader sx={{
                        bgcolor:'gray'
                    }}>
                      Active orders
                    </ListSubheader>
                    }>
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

            <List
                sx={{
                    width:'100%',
                    maxWidth: 600,
                    bgcolor: 'gray',
                    overflow: 'auto',
                    maxHeight: 300
                }}
                subheader={
                    <ListSubheader sx={{
                        bgcolor:'gray'
                    }}>
                      Incoming orders
                    </ListSubheader>
                    }>
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

export default ManageOrders;