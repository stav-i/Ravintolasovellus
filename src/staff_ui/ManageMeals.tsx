import { Typography, List, ListItem, Grid, CssBaseline, Avatar, Button, Divider, TextField } from '@mui/material';
import { Stack, ThemeProvider } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import StaffTheme from './StaffTheme';
import { useEffect, useState } from 'react';

interface Meal {
    id: string,
    nimi: string,
    info: string,
    hinta: number,
    kategoria: string
}

const ManageMeals = () => {
    const navigoi = useNavigate();

    const [menu, setMenu] = useState<Meal[]>([]);
    const [nimi, setNimi] = useState<String>("");
    const [info, setInfo] = useState<String>("");
    const [hinta, setHinta] = useState<number>(0);
    const [kategoria, setKategoria] = useState<String>("");

    useEffect(() => {
        haeMenu();
    }, []);

    const haeMenu = async () => {
        try {
            const response = await fetch("/menu");
            const data = await response.json();
            setMenu(data);
        } catch (error: any) {
            console.error(error);
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await fetch(`/menu/${id}`, {
                method: "DELETE"
            })
        } catch (error) {
            console.log(JSON.stringify(error));
        }
        haeMenu();
    }

    const handleUusi = async () => {
        if (!nimi || !info || !hinta || !kategoria) {
            return;
        }

        try {
            await fetch("/menu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nimi: nimi, info: info, hinta: hinta, kategoria: kategoria })
            });
            haeMenu();
        } catch (error: any) {
            console.log("Error adding new meal")
        }
    }

    var meal_row = menu.map(meal => (
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
                        }}>{meal.info}</Typography>
                    </Grid>
                
                    <Grid item xs={2}>
                        <Button>
                            <Typography>edit</Typography>
                        </Button>
                    </Grid>
                </Grid>
                    
                <Grid container direction={'row'}>
                    <Grid item xs={10}>
                        <Typography variant='h6'>{meal.nimi}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => handleDelete(meal.id)}>
                            <Typography>Poista</Typography>
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
        
            <Stack>
                <Typography variant='subtitle1'>Ruoan nimi</Typography>
                <TextField variant="standard" onChange={(event) => setNimi(event.target.value)}/>
                <Typography variant='subtitle1'>Kuvaus</Typography>
                <TextField variant="standard" onChange={(event) => setInfo(event.target.value)}/>
                <Typography variant='subtitle1'>Hinta</Typography>
                <TextField variant="standard" type="number" onChange={(event) => setHinta(Number(event.target.value))}/>
                <Typography variant='subtitle1'>Kategoria</Typography>
                <TextField variant="standard" onChange={(event) => setKategoria(event.target.value)}/>
            </Stack>
            <Button onClick={() => handleUusi()}>
                Lisää uusi ruoka
            </Button>

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