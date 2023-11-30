import { Box, Container, Typography, List, ListItem, Grid, CssBaseline, Avatar, Button, Divider } from '@mui/material';
import { Stack, ThemeProvider } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import StaffTheme from './StaffTheme';


const ManageMeals = () => {
    const navigoi = useNavigate();

    // mock data
    const meals = [{"id": 1, "title": "Makaronilaatikko", "img": "img1", "desc": "description"}, {"id": 2, "title": "Ananaspizza", "img": "img2", "desc": "description"}, {"id": 3, "title": "Jauhelihakastike", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}]


    var meal_row = meals.map(meal => (
        <ThemeProvider theme={StaffTheme}>
        <CssBaseline/>
        <ListItem>
            <Grid key={meal.id} container>
                <Grid container direction={'row'}>
                    <Grid item xs={2}>
                        {/* Meal img placeholder */}
                        <Avatar></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{
                            fontSize: '0.8rem'
                        }}>{meal.desc}</Typography>
                    </Grid>
                
                    <Grid item xs={2}>
                        <Button>
                            <Typography>Button</Typography>
                        </Button>
                    </Grid>
                </Grid>
                    
                <Grid container direction={'row'}>
                    <Grid item xs={10}>
                        <Typography variant='h6'>{meal.title}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            <Typography>Button</Typography>
                        </Button>
                    </Grid>
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
        <Grid>
            <Stack
                sx={{
                    alignItems: 'center',
                    padding: 2
                }}>
                <Typography variant='h4'>Manage meals</Typography>
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
                    {meal_row}                    
                </List>
            </Stack>
        </Grid>
        </ThemeProvider>
    )
}


export default ManageMeals;