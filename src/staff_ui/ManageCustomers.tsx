import { Box, Container, Typography, Grid, List, ListItem, CssBaseline, Avatar, Button, Divider } from '@mui/material';
import { Stack, ThemeProvider } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import StaffTheme from './StaffTheme';
import React, { useState, useEffect } from 'react';
import { fetchData, addData, deleteData, editData } from '../axios';

export interface DataItem {
    id: number;
    username: string;
  }



const ManageCustomers = () => {
    const navigoi = useNavigate();

    
    const [customers, setCustomers] = useState<DataItem[]>([]);

    useEffect(() => {
        haeAsiakas();
    }, []);

    const haeAsiakas = async () => {
        try {
            const response = await fetch("/api/getuserdata");
            const data = await response.json();
            setCustomers(data);
        } catch (error: any) {
            console.error(error);
        }
    }


    var customer_row = customers.map(customer => (
        <ThemeProvider theme={StaffTheme}>
        <CssBaseline/>
        <ListItem>
        <Grid key={customer.id} container>
                <Grid container direction={'row'}>
                    <Grid item xs={2}>
                        <Avatar></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography> </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            <Typography>Edit</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction={'row'}>
                    <Grid item xs={10}>
                        <Typography variant='h6'>{customer.username}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            <Typography>Delete</Typography>
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
                <Typography variant='h4'>Manage customers</Typography>
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
                        {customer_row}
                </List>
            </Stack>
            
        </Grid>





        </ThemeProvider>
    )
}

export default ManageCustomers;