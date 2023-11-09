import { Button, CssBaseline, Divider, FormControlLabel, IconButton, Radio, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Stack } from '@mui/system';
import data from './Meals.json';
import React, { useEffect, useState } from 'react';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DeleteIcon from '@mui/icons-material/Delete';

interface Meal {
    id: string,
    name: string,
    hinta: number,
    ingredients: string[]
}

const theme = createTheme({
    palette: {
        secondary: {
            main: '#d48484'
        } 
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
    components: {
        MuiButton: {
          styleOverrides:{
            root: {
              textTransform: 'lowercase',
              color: '#000',
              },
          },
        }
      }
  });

const Cart = () => {

    const [toimitus, setToimitus] = useState<String>();
    const [maksu, setMaksu] = useState<String>();

    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        setMeals(data);
    }, []);

    const handleToimitus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToimitus(event.target.value);
    };
    
    const handleMaksu = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaksu(event.target.value);
    };

    const deleteMeal = (id: string) => {
        const newMeals = meals.filter((meal) => meal.id !== id);
        setMeals(newMeals);
      };

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline>
            <Stack direction={{ xs: 'column', md: 'row'}} paddingTop='10px' margin={{ sm: '0 50px 0 50px'}}>
                <Stack direction='column' width={{ md: "60%" }} marginRight={{ md: "3% "}}>
                    <Typography variant="h6">Ostoskorin sisältö</Typography>
                    <Stack direction='column' bgcolor='#f1eaea' minHeight="100px" padding="10px 10px 0 10px">
                        {meals.map(meal => {
                            return(
                                <Stack sx={{
                                    bgcolor: "#fafafa",
                                    borderRadius: 1,
                                    padding: "5px",
                                    marginBottom: '10px',
                                    paddingLeft: '10px'
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600
                                    }}>{meal.name}</Typography>
                                    <Typography variant="subtitle2">{meal.ingredients.join(', ')}</Typography>   
                                    <Stack direction='row' justifyContent='flex-end'>
                                        <IconButton onClick={() => deleteMeal(meal.id)}
                                            sx={{ width: '22px', height: '22px', margin: '0 5px 0 5px'}}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>              
                                </Stack>
                            )
                        })}
                    </Stack>
                    <Stack direction='row'>
                        <Stack direction='column' width='48%' marginRight='4%'>
                            <Typography variant="h6">Toimitustapa</Typography>
                                <Stack direction='row' bgcolor='#f1eaea' padding='10px'>
                                    <FormControlLabel
                                        control={
                                            <Radio 
                                                checked={toimitus === '1'}
                                                onChange={handleToimitus}
                                                value='1'
                                                disableRipple
                                                icon={<DirectionsCarIcon sx={{ fontSize: 40}}/>}
                                                checkedIcon={<DirectionsCarIcon sx={{ fontSize: 40}}/>}
                                            />}
                                        label="Kuljetus"
                                        labelPlacement="bottom"
                                        sx={{
                                            bgcolor: '#fafafa',
                                            borderRadius: '0',
                                            padding: '10px',
                                            margin: '0 10px 0 0',
                                            width: '50%'
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Radio 
                                                checked={toimitus === '0'}
                                                onChange={handleToimitus}
                                                value='0'
                                                disableRipple
                                                icon={<DirectionsWalkIcon sx={{ fontSize: 40}}/>}
                                                checkedIcon={<DirectionsWalkIcon sx={{ fontSize: 40}}/>}
                                            />}
                                        label="Nouto"
                                        labelPlacement="bottom"
                                        sx={{
                                            bgcolor: '#fafafa',
                                            borderRadius: '0',
                                            padding: '10px',
                                            margin: '0',
                                            width: '50%'
                                        }}
                                    />
                                </Stack>
                        </Stack>
                        <Stack direction='column' width='48%'>
                            <Typography variant="h6">Maksutapa</Typography>
                                <Stack direction='row' bgcolor='#f1eaea' padding='10px'>
                                    <FormControlLabel
                                        control={
                                            <Radio 
                                                checked={maksu === '1'}
                                                onChange={handleMaksu}
                                                value='1'
                                                disableRipple
                                                icon={<CreditCardIcon sx={{ fontSize: 40}}/>}
                                                checkedIcon={<CreditCardIcon sx={{ fontSize: 40}}/>}
                                            />}
                                        label="Luottokortti"
                                        labelPlacement="bottom"
                                        sx={{
                                            bgcolor: '#fafafa',
                                            borderRadius: '0',
                                            padding: '10px',
                                            margin: '0 10px 0 0',
                                            width: '50%'
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Radio 
                                                checked={maksu === '0'}
                                                onChange={handleMaksu}
                                                value='0'
                                                disableRipple
                                                icon={<AccountBalanceIcon sx={{ fontSize: 40}}/>}
                                                checkedIcon={<AccountBalanceIcon sx={{ fontSize: 40}}/>}
                                            />}
                                        label="Pankki"
                                        labelPlacement="bottom"
                                        sx={{
                                            bgcolor: '#fafafa',
                                            borderRadius: '0',
                                            padding: '10px',
                                            margin: '0',
                                            width: '50%'
                                        }}
                                    />
                                </Stack>
                        </Stack>
                    </Stack>                    
                </Stack>
                <Stack direction='column' width={{ md: "37% "}}>
                    <Typography variant="h6">Yhteenveto</Typography>
                    <Stack direction='column' bgcolor='#f1eaea'>
                        <Stack direction='row'>
                            <Typography variant='h5'>Yhteensä</Typography>
                            <Typography variant='body2'>{meals.reduce((a, b) => a + b.hinta, 0)} €</Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography variant='h5'>Toimitus</Typography>
                            <Typography variant='body2'>{toimitus === '1' ? '4,95 €' : '-'}</Typography>
                        </Stack>
                        <Divider sx={{ margin:'10px'}} />
                        <Stack direction='row'>
                            <Typography variant='h5'>Kokonaishinta</Typography>
                            <Typography variant='body2'>{Math.round(
                                (meals.reduce((a, b) => a + b.hinta, 0) + (toimitus === '1' ? 4.95 : 0)) * 100) / 100} €</Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems='flex-end' margin='20px'>
                        <Button variant='contained' color='secondary' disabled={!toimitus || !maksu}>Tilaa</Button>
                    </Stack>
                </Stack>
            </Stack>            
        </CssBaseline>
        </ThemeProvider>

    )
}

export default Cart;