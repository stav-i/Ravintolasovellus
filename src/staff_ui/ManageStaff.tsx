import { Box, Container, Typography, Grid, List, ListItem } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const ManageStaff = () => {
    const navigoi = useNavigate();

    // mock data
    const staff = [{"id": 1, "name": "name", "info": "info"}, {"id": 2, "name": "name", "info": "info"}, {"id": 3, "name": "name", "info": "info"}]

    var staff_row = staff.map(staffmember => (
        <ListItem>
        <Grid key={staffmember.id} container>
            <Grid item xs={4}>
                <Typography>{staffmember.name}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography>{staffmember.info}</Typography>
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
                <Typography>Manage staff</Typography>
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
                        {staff_row}
                </List>
            </Stack>
        </Grid>
    )
}

export default ManageStaff;