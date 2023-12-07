import { Typography, Grid, CssBaseline, Button, Divider, TextField, InputAdornment } from '@mui/material';
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

const kategoriat = ["Pääruoat", "Pizzat", "Jälkiruoat", "Juomat"];

const ManageMeals = () => {
    const [menu, setMenu] = useState<Meal[]>([]);
    const [edit, setEdit] = useState<boolean>(false);

    const [id, setId] = useState<String>('');
    const [nimi, setNimi] = useState<String>('');
    const [info, setInfo] = useState<String>('');
    const [hinta, setHinta] = useState<number>(0);
    const [kategoria, setKategoria] = useState<String>('');

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

    const openEdit = async (uid: string, unimi: string, uinfo: string, uhinta: number, ukat: string) => {
        setId(uid)
        setNimi(unimi);
        setInfo(uinfo);
        setHinta(uhinta);
        setKategoria(ukat);
        setEdit(true);
    }

    const saveEdit = async () => {
        try {
            await fetch(`/menu/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nimi: nimi, info: info, hinta: hinta, kategoria: kategoria})
            });
            setEdit(false);
            haeMenu();
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <ThemeProvider theme={StaffTheme}>
            <CssBaseline />
            <Grid>
                <Stack
                    sx={{
                        alignItems: 'center',
                        padding: 2
                    }}>
                    <Typography variant='h4'>Manage meals</Typography>
                </Stack>

                <Stack direction='row'>
                    <Stack width="30%">
                        <Stack style={{display: edit == true ? 'none' : 'block'}}>
                            <Typography variant='h5'>Lisää uusi ruoka</Typography>
                            <Stack spacing='12px'>
                                <TextField label='Ruoan nimi' variant='outlined' onChange={(e) => setNimi(e.target.value)} />
                                <TextField label='Ainesosat' variant='outlined' onChange={(e) => setInfo(e.target.value)} />
                                <TextField label='Hinta' variant='outlined' type="number"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                    }}
                                    onChange={(e) => setHinta(Number(e.target.value))} />
                                <TextField label='Kategoria' variant='outlined' onChange={(e) => setKategoria(e.target.value)} />
                            </Stack>
                            <Button style={{margin: '10px'}} onClick={() => handleUusi()}>
                                Lisää
                            </Button>
                        </Stack>
                        <Stack style={{display: edit == false ? 'none' : 'block'}}>
                            <Typography variant='h5'>Muokkaa ruokaa</Typography>
                            <Stack spacing='12px'>
                                <TextField label='Ruoan nimi' value={nimi} variant='outlined' onChange={(e) => setNimi(e.target.value)} />
                                <TextField label='Ainesosat' value={info} variant='outlined' onChange={(e) => setInfo(e.target.value)} />
                                <TextField label='Hinta' value={hinta} variant='outlined' type="number"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                    }}
                                    onChange={(e) => setHinta(Number(e.target.value))} />
                                <TextField label='Kategoria' value={kategoria} variant='outlined' onChange={(e) => setKategoria(e.target.value)} />
                            </Stack>
                            <Button style={{margin: '10px'}} onClick={() => saveEdit()}>
                                Tallenna
                            </Button>
                            <Button style={{margin: '10px'}} onClick={() => setEdit(false)}>
                                Peruuta
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack width="65%" marginLeft='5%'>
                        {kategoriat.map(katg => {
                            return (
                                <Stack key={katg}>
                                    <Typography variant='h5'>{katg}</Typography>
                                    <Divider sx={{ bgcolor: 'black', borderBottomWidth: '1px', marginBottom: '5px' }} />
                                    <Stack marginBottom="10px">
                                        {menu.map(meal => {
                                            return meal.kategoria === katg ?
                                                <Stack width='100%' key={meal.id} direction='row' marginBottom='20px'>
                                                    <Stack width='90%'>
                                                        <Stack direction='row' justifyContent='space-between' paddingRight='30px'>
                                                            <Typography variant='h6'>{meal.nimi}</Typography>
                                                            <Typography variant='h6'>{meal.hinta.toFixed(2)} €</Typography>
                                                        </Stack>
                                                        <Typography>{meal.info}</Typography>
                                                    </Stack>
                                                    <Stack>
                                                        <Button onClick={() => openEdit(meal.id, meal.nimi, meal.info, meal.hinta, meal.kategoria)} style={{ width: '30px'}}>
                                                            <Typography>edit</Typography>
                                                        </Button>
                                                        <Button style={{ width: '30px'}} onClick={() => handleDelete(meal.id)}>
                                                            <Typography>poista</Typography>
                                                        </Button>
                                                    </Stack>
                                                </Stack>
                                            : <></>
                                        })}
                                    </Stack>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
            </Grid>
        </ThemeProvider>
    )
}


export default ManageMeals;