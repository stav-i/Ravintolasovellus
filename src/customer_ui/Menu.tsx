import { Typography, Stack, ThemeProvider, CssBaseline, createTheme, Divider, Grid, IconButton } from '@mui/material';
import data from './menu.json';
import { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface Meal {
    id: string,
    nimi: string,
    info: string,
    hinta: number,
    kategoria: string
}

const Menu = () => {

    const theme = createTheme({
        typography: {
            h6: {
                fontWeight: 700,
                fontSize: "1.1rem"
            },
            h5: {
                marginTop: '30px'
            }
        }
    });

    const [menu, setMenu] = useState<Meal[]>([]);

    useEffect(() => {
        setMenu(data);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Stack padding='10px 20px 0 20px'>
                    <Typography variant='h5'>Pääruoat</Typography>
                    <Divider sx={{ bgcolor:'black', borderBottomWidth: '2px', marginBottom:'20px'}}/>
                        <Grid container columns={{ sm: 6, md: 12}} spacing={4}>
                            {menu.map(meal => {
                                return meal.kategoria == 'pääruoka' ? 
                                    <Grid item sm={6} md={6}>
                                        <Stack direction='row'>
                                            <Stack width='100%'>
                                                <Stack direction='row' justifyContent='space-between'>
                                                    <Typography variant='h6'>{meal.nimi}</Typography>
                                                    <Typography variant='h6'>{meal.hinta.toFixed(2)} €</Typography>
                                                </Stack>
                                                <Typography>{meal.info}</Typography>
                                            </Stack>
                                            <IconButton onClick={() => console.log(meal.nimi)}
                                                sx={{ width: '30px', height: '30px', margin: '0 7px 0 7px'}}>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                :
                                <></>
                            })}
                        </Grid>

                    <Typography variant='h5'>Pizzat</Typography>
                    <Divider sx={{ bgcolor:'black', borderBottomWidth: '2px', marginBottom:'20px'}}/>
                    <Grid container columns={{ sm: 6, md: 12}} spacing={2}>
                            {menu.map(meal => {
                                return meal.kategoria == 'pizza' ? 
                                    <Grid item sm={6} md={6}>
                                        <Stack direction='row'>
                                            <Stack width='100%'>
                                                <Stack direction='row' justifyContent='space-between'>
                                                    <Typography variant='h6'>{meal.nimi}</Typography>
                                                    <Typography variant='h6'>{meal.hinta.toFixed(2)} €</Typography>
                                                </Stack>
                                                <Typography>{meal.info}</Typography>
                                            </Stack>
                                            <IconButton onClick={() => console.log(meal.nimi)}
                                                sx={{ width: '30px', height: '30px', margin: '0 7px 0 7px'}}>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                :
                                <></>
                            })}
                        </Grid>

                    <Typography variant='h5'>Jälkiruoat</Typography>
                    <Divider sx={{ bgcolor:'black', borderBottomWidth: '2px', marginBottom:'20px'}}/>
                    <Grid container columns={{ sm: 6, md: 12}} spacing={2}>
                            {menu.map(meal => {
                                return meal.kategoria == 'jälkiruoka' ? 
                                    <Grid item sm={6} md={6}>
                                        <Stack direction='row'>
                                            <Stack width='100%'>
                                                <Stack direction='row' justifyContent='space-between'>
                                                    <Typography variant='h6'>{meal.nimi}</Typography>
                                                    <Typography variant='h6'>{meal.hinta.toFixed(2)} €</Typography>
                                                </Stack>
                                                <Typography>{meal.info}</Typography>
                                            </Stack>
                                            <IconButton onClick={() => console.log(meal.nimi)}
                                                sx={{ width: '30px', height: '30px', margin: '0 7px 0 7px'}}>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                :
                                <></>
                            })}
                        </Grid>

                    <Typography variant='h5'>Juomat</Typography>
                    <Divider sx={{ bgcolor:'black', borderBottomWidth: '2px', marginBottom:'20px'}}/>
                    <Grid container columns={{ sm: 6, md: 12}} spacing={2}>
                            {menu.map(meal => {
                                return meal.kategoria == 'juoma' ? 
                                    <Grid item sm={6} md={6}>
                                        <Stack direction='row'>
                                            <Stack width='100%'>
                                                <Stack direction='row' justifyContent='space-between'>
                                                    <Typography variant='h6'>{meal.nimi}</Typography>
                                                    <Typography variant='h6'>{meal.hinta.toFixed(2)} €</Typography>
                                                </Stack>
                                                <Typography>{meal.info}</Typography>
                                            </Stack>
                                            <IconButton onClick={() => console.log(meal.nimi)}
                                                sx={{ width: '30px', height: '30px', margin: '0 7px 0 7px'}}>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                :
                                <></>
                            })}
                        </Grid>
                </Stack>
        </ThemeProvider>
    )
}

export default Menu;