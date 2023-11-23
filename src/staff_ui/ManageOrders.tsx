import { Box, Container, Typography, Grid, List, ListItem, ListSubheader, CssBaseline } from '@mui/material';
import { Stack, ThemeProvider } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';


// const theme = createTheme({
//     palette: {
//         secondary: {
//             main: '#d48484'
//         } 
//     },
//     typography: {
//         h6: {
//             fontWeight: 700,
//             fontSize: "1.1rem",
//             margin: '10px'
//         },
//         h5: {
//             fontSize: "1.1rem",
//             lineHeight: '2.2rem',
//             textAlign: 'right',
//             letterSpacing: 0.7,
//             marginRight: '15px',
//             width: '50%'
//         },
//         body2: {
//             fontWeight: 600,
//             lineHeight: '2.2rem',
//             fontSize: '1.2rem'
//         }
//     }, 
//     components: {
//         MuiButton: {
//           styleOverrides:{
//             root: {
//               textTransform: 'lowercase',
//               color: '#000',
//               },
//           },
//         }
//       }
//   });

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        }, 
      },
      typography: {
                h6: {
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    margin: '10px'
                },
                h5: {
                    fontSize: "1.1rem",
                    lineHeight: '2.2rem',
                    textAlign: 'right',
                    letterSpacing: 0.7,
                    marginRight: '15px',
                    width: '50%'
                },
                body2: {
                    fontWeight: 600,
                    lineHeight: '2.2rem',
                    fontSize: '1.2rem'
                }
            }, 
})

const ManageOrders = () => {
    const navigoi = useNavigate();

    //mock data
    const activeOrders = [{"id": 1, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 2, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}, {"id": 3, "ordername": "ordername", "orderinfo": "orderinfo"}]

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
        <ThemeProvider theme={theme}>
        <Grid sx={{
            backgroundColor: 'gray'
        }}>
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 2
                }}>
            <Typography>Manage orders</Typography>
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
                        overflow: 'auto',
                        maxHeight: 300
                    }}
                    subheader={
                        <ListSubheader>
                            <Typography variant='h5'>Active orders</Typography>
                        </ListSubheader>}>

                        <Typography variant='h6'>{activeOrders_row}</Typography>
                </List>

                <List
                    sx={{
                        width:'100%',
                        maxWidth: 600,
                        overflow: 'auto',
                        maxHeight: 300
                    }}
                    subheader={
                        <ListSubheader>
                            <Typography variant='h5'>Incoming orders</Typography>
                        </ListSubheader>}>

                        <Typography variant='h6'>{incomingOrders_row}</Typography>
                </List>
            </Stack>
            
        </Grid>
        </ThemeProvider>
    )
}

export default ManageOrders;