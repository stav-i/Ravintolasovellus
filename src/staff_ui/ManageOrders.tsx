import { Box, Container, Typography, Grid, List, ListItem, ListSubheader, CssBaseline, Button, Divider, Avatar } from '@mui/material';
import { Stack, ThemeProvider } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { DeliveryDining, Restaurant } from '@mui/icons-material';
import StaffTheme from './StaffTheme';


const ManageOrders = () => {
    const navigoi = useNavigate();

    //mock data
    const activeOrders = [{"id": 1, "ordername": "ordername", "orderinfo": "orderinfo orderinfo orderinfo orderinfo orderinfo orderinfo orderinfo orderinfo orderinfo orderinfo"}, {"id": 2, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}]

    const incomingOrders = [{"id": 1, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 2, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}]

    var activeOrders_row = activeOrders.map(order => (
        <ThemeProvider theme={StaffTheme}>
        <CssBaseline/>
        <ListItem>
            <Grid key={order.id} container>
                <Grid item xs={2}>
                    {/* Meal img placeholder */}
                    <Avatar></Avatar>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h6'>{order.ordername}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button>
                        <Typography>Button</Typography>
                    </Button>
                </Grid>
                <Grid item xs={10}>
                    <Typography>{order.orderinfo}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button>
                        <Typography>Button</Typography>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Divider></Divider>
                </Grid>
            </Grid>
        </ListItem>
        </ThemeProvider>
    ))

    var incomingOrders_row = incomingOrders.map(order => (
        <ThemeProvider theme={StaffTheme}>
        <CssBaseline/>
        <ListItem>
            <Grid key={order.id} container>
                <Grid item xs={2}>
                    {/* Meal img placeholder */}
                    <Avatar></Avatar>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h6'>{order.ordername}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button>
                        <Typography>Button</Typography>
                    </Button>
                </Grid>
                <Grid item xs={10}>
                    <Typography>{order.orderinfo}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button>
                        <Typography>Button</Typography>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Divider></Divider>
                </Grid>
            </Grid>
        </ListItem>
        </ThemeProvider>
    ))

    return (
        <ThemeProvider theme={StaffTheme}>
        <CssBaseline/>
        <Grid sx={{

        }}>
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 2
                }}>
            <Typography variant='h4'>Manage orders</Typography>
            </Stack>

            <Stack
                sx={{
                    alignItems: 'flex-start',
                    padding: 5
                }}
                direction={'row'}
                spacing={2}>
                 
                <List
                    sx={{
                        width:'100%',
                        maxWidth: 600,
                        overflow: 'auto',
                        maxHeight: 500
                    }}
                    subheader={
                        <ListSubheader>
                            <Grid container>
                                <Grid item xs={2}>
                                    <DeliveryDining/>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant='h5'>Active orders</Typography>
                                </Grid>
                            </Grid>
                        </ListSubheader>}>

                        <Typography>{activeOrders_row}</Typography>
                </List>

                <List
                    sx={{
                        width:'100%',
                        maxWidth: 600,
                        overflow: 'auto',
                        maxHeight: 500
                    }}
                    subheader={
                        <ListSubheader>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Restaurant/>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant='h5'>Incoming orders</Typography>
                                </Grid>
                            </Grid>
                        </ListSubheader>}>

                        <Typography>{incomingOrders_row}</Typography>
                </List>
            </Stack>
            
        </Grid>
        </ThemeProvider>
    )
}

export default ManageOrders;