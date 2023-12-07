import { Box, Container, Typography, Grid, List, ListItem, CssBaseline, Avatar, Button, Divider } from '@mui/material';
import { Stack, ThemeProvider } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import StaffTheme from './StaffTheme';

const ManageStaff = () => {
    const navigoi = useNavigate();

    const staff = [{"id": 1, "name": "name", "info": "info"}, {"id": 2, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}]

    var staff_row = staff.map(staffmember => (
        <ThemeProvider theme={StaffTheme}>
        <CssBaseline/>
        <ListItem>
            <Grid key={staffmember.id} container>
                <Grid container direction={'row'}>
                    <Grid item xs={2}>
                        <Avatar></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{staffmember.info}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            <Typography>Button</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction={'row'}>
                    <Grid item xs={10}>
                        <Typography variant='h6'>{staffmember.name}</Typography>
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
            </Grid>
        </ListItem>
        </ThemeProvider>
    ))

    return (
        <ThemeProvider theme={StaffTheme}>
        <CssBaseline/>
        <Grid>
            
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 2
                }}>
                <Typography variant='h4'>Manage staff</Typography>
            </Stack>
            
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 5
                }}>
                <List
                    sx={{
                        width:'100%',
                        maxWidth: 1000,
                        overflow: 'auto',
                        maxHeight: 500
                    }}>
                        {staff_row}
                </List>
            </Stack>
        </Grid>
        </ThemeProvider>
    )
}

export default ManageStaff;