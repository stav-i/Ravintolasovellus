import { Button, Divider, FormControlLabel, IconButton, Radio, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DeleteIcon from '@mui/icons-material/Delete';

interface Meal {
    id: string,
    nimi: string,
    info: string,
    hinta: number,
    kategoria: string
}

const Cart = () => {
    const [cart, setCart] = useState<Meal[]>([]);
    const [toimitus, setToimitus] = useState<String>();
    const [maksu, setMaksu] = useState<String>();

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const data = JSON.parse(localStorage.getItem('cart') || "[]");
        setCart(data);
    }

    const handleToimitus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToimitus(event.target.value);
    };
    
    const handleMaksu = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaksu(event.target.value);
    };

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} paddingTop='10px' margin={{ sm: '0 50px 0 50px' }}>
            <Stack width={{ md: "60%" }} marginRight={{ md: "3% " }} marginBottom='20px'>
                <Typography variant="h5">Ostoskorin sisältö</Typography>
                <Stack bgcolor='#f1eaea' minHeight="100px" padding="10px 10px 0 10px" marginBottom='20px'>
                    {cart.map((meal, i) => {
                        return (
                            <Stack key={i} sx={{
                                bgcolor: "#fafafa",
                                borderRadius: 1,
                                padding: "5px",
                                marginBottom: '10px',
                                paddingLeft: '10px'
                            }}>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Typography sx={{ fontWeight: 600 }}>{meal.nimi}</Typography>
                                    <Typography sx={{ fontWeight: 600 }}>{meal.hinta.toFixed(2)} €</Typography>
                                </Stack>
                                <Typography variant="subtitle2">{meal.info}</Typography>
                                <Stack direction='row' justifyContent='flex-end'>
                                    <IconButton onClick={() => {
                                        let index = cart.findIndex(x => x.id === meal.id);
                                        cart.splice(index, 1);
                                        localStorage.setItem("cart", JSON.stringify(cart));
                                        loadCart();
                                        window.dispatchEvent(new Event('storage'));
                                    }}
                                        sx={{ width: '22px', height: '22px', margin: '0 5px 0 5px' }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        )
                    })}
                </Stack>
                <Stack direction='row'>
                    <Stack width='48%' marginRight='4%'>
                        <Typography variant="h5">Toimitustapa</Typography>
                        <Stack direction='row' bgcolor='#f1eaea' padding='10px'>
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={toimitus === '1'}
                                        onChange={handleToimitus}
                                        value='1'
                                        disableRipple
                                        icon={<DirectionsCarIcon sx={{ fontSize: 40 }} />}
                                        checkedIcon={<DirectionsCarIcon sx={{ fontSize: 40 }} />}
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
                                        icon={<DirectionsWalkIcon sx={{ fontSize: 40 }} />}
                                        checkedIcon={<DirectionsWalkIcon sx={{ fontSize: 40 }} />}
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
                    <Stack width='48%'>
                        <Typography variant="h5">Maksutapa</Typography>
                        <Stack direction='row' bgcolor='#f1eaea' padding='10px'>
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={maksu === '1'}
                                        onChange={handleMaksu}
                                        value='1'
                                        disableRipple
                                        icon={<CreditCardIcon sx={{ fontSize: 40 }} />}
                                        checkedIcon={<CreditCardIcon sx={{ fontSize: 40 }} />}
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
                                        icon={<AccountBalanceIcon sx={{ fontSize: 40 }} />}
                                        checkedIcon={<AccountBalanceIcon sx={{ fontSize: 40 }} />}
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
            <Stack width={{ md: "37% " }}>
                <Typography variant="h5">Yhteenveto</Typography>
                <Stack bgcolor='#f1eaea'>
                    <Stack direction='row'>
                        <Typography variant='yht1'>Yhteensä</Typography>
                        <Typography variant='yht2'>{cart.reduce((a, b) => a + b.hinta, 0).toFixed(2)} €</Typography>
                    </Stack>
                    <Stack direction='row'>
                        <Typography variant='yht1'>Toimitus</Typography>
                        <Typography variant='yht2'>{toimitus === '1' ? '4,95 €' : '-'}</Typography>
                    </Stack>
                    <Divider sx={{ margin: '10px' }} />
                    <Stack direction='row'>
                        <Typography variant='yht1'>Kokonaishinta</Typography>
                        <Typography variant='yht2'>{(Math.round(
                            (cart.reduce((a, b) => a + b.hinta, 0) + (toimitus === '1' ? 4.95 : 0)) * 100) / 100).toFixed(2)} €</Typography>
                    </Stack>
                </Stack>
                <Stack alignItems='flex-end' margin='20px'>
                    <Button variant='contained' color='secondary' disabled={!toimitus || !maksu}
                        onClick={() => console.log(cart)}>Tilaa</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Cart;