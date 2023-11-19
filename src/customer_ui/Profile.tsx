import { Box, Container, Typography, Button, TextField, colors } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { UserData, addData, fetchData, fetchDatafromDatabase } from '../axios';


const Profile = () => {
    const navigoi = useNavigate();
   

    const handleClick = () => {
        navigoi("/login");
      };

    
    const [data, setData] = useState<UserData[]>([]);

    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const apiData = await fetchDatafromDatabase(); 
          setData(apiData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDataFromAPI();
    }, []);

    
    return (

        <Container>
            <Typography variant="h4">Login</Typography>
            <Box display="flex" sx={{ marginTop: "25px", alignItems: "center", justifyContent: "center"}}>
                    <Typography >Et ole kirjautunut sisään </Typography>
                    <br></br>
                    <Button sx={{marginLeft: "50px"}} variant='contained' onClick={handleClick}>Kirjaudu sisään</Button>
            </Box>
            <Box>
                <Typography>
                    <h1>Käyttäjätiedot ja salasanat </h1>
                    <button onClick={addData}>Add new</button>
                    <div className="data-grid">
                        <table>
                        <thead>
                            <tr>
                            <th>Username</th>
                            <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                            <tr key={item.username}>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{item.repassword}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </Typography>
            </Box>
        </Container>
    );
};

export default Profile;
