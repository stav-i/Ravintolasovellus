import { Box, Container, Typography, Grid, List, ListItem, ListSubheader } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageOrders = () => {
    const navigoi = useNavigate();

    //mock data
    const activeOrders = [{"id": 1, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 2, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}]

    const incomingOrders = [{"id": 1, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 2, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}]

    var activeOrders_row = activeOrders.map(order => (
        <ListItem>
            <Grid key={order.id} container>
                <Grid item xs={4}>
                    <Typography>{order.ordername}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>{order.orderinfo}</Typography>
                </Grid>
            </Grid>
        </ListItem>
    ))

    var incomingOrders_row = incomingOrders.map(order => (
        <ListItem>
            <Grid key={order.id} container>
                <Grid item xs={4}>
                    <Typography>{order.ordername}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>{order.orderinfo}</Typography>
                </Grid>
            </Grid>
        </ListItem>
    ))

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
                    {activeOrders_row}
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
                    {incomingOrders_row}
            </List>
            </Stack>
        </Grid>
    )
}

export default ManageOrders;