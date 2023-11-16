import { Box, Container, Typography, List, ListItem, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';


const ManageMeals = () => {
    const navigoi = useNavigate();

    // mock data
    const meals = [{"id": 1, "title": "meal1", "img": "img1", "desc": "description"}, {"id": 2, "title": "meal2", "img": "img2", "desc": "description"}, {"id": 3, "title": "meal3", "img": "img3", "desc": "description"}]

    const titlestyle={
        bgcolor: 'gray'
    }


    var meal_row = meals.map(meal => (
        <ListItem>
        <Grid key={meal.id} container>
            <Grid item xs={4}>
                <Typography>{meal.img}</Typography>
            </Grid>
            <Grid item xs={8} sx={titlestyle}>
                <Typography>{meal.title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>{meal.desc}</Typography>
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
            <Typography>
            Manage meals
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
                    maxWidth: 1000,
                    bgcolor: 'gray',
                    overflow: 'auto',
                    maxHeight: 500
                }}>
                {meal_row}                    
            </List>
            </Stack>
        </Grid>
    )
}

// var row_html=msg.map(item=>{
//   i++;
//   return(
//     <Grid key={i} container>
//       <Grid item xs={1} sx={rowsx1}>
//         <img src={imgs[item.senderimg]} height="30"/>
//       </Grid>
//       <Grid item xs={2} sx={rowsx2}>
//         <Typography sx={{fontWeight: "bold"}}>{item.sendername+">"}</Typography>
//       </Grid>
//       <Grid item xs={9} sx={rowsx3}>
//         <Typography>{item.text}</Typography>
//       </Grid>
//     </Grid>
//   );
// })

export default ManageMeals;