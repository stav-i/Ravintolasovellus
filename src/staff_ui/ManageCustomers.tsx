import { Box, Container, Typography, Grid, List, ListItem } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageCustomers = () => {
    const navigoi = useNavigate();

    // mock data
    const customers = [{"id": 1, "name": "name", "info": "info"}, {"id": 2, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}]

    var customer_row = customers.map(customer => (
        <ListItem>
        <Grid key={customer.id} container>
            <Grid item xs={4}>
                <Typography>{customer.name}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography>{customer.info}</Typography>
            </Grid>
        </Grid>
        </ListItem>
    ))

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
                <Typography>Manage customers</Typography>
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
                        {customer_row}
                </List>
            </Stack>
            
        </Grid>
    )
}

export default ManageCustomers;