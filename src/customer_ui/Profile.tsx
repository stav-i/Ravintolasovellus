import { Box, Container, Typography, Button, TextField, colors } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { FC, useEffect, useState } from "react";
import { UserData, addData, fetchData, fetchDatafromDatabase } from '../axios';
import { user } from '../types';

type Props={
  currentuser: user;
}

const Profile: FC<Props>=({currentuser})=>{
  const [data, setData] = useState<UserData[]>([]);
  const [mydata, setMyData] = useState<UserData>();
    const navigoi = useNavigate();
   

    const handleClick = () => {
        navigoi("/login");
      };

    
    

    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const apiData = await fetchDatafromDatabase(); 
          setData(apiData);
          //console.log(apiData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDataFromAPI();
    }, []);

    function loggedincheck(kayttaja: user){
      if(kayttaja.role==0){
        return <Typography >Et ole kirjautunut sisään </Typography>;
      }
      return <Typography > logged in as: {kayttaja.name}</Typography>;
    }
    
    return (

        <Container>
            <Typography variant="h4">Login</Typography>
            <Box display="flex" sx={{ marginTop: "25px", alignItems: "center", justifyContent: "center"}}>
                    {loggedincheck(currentuser)}
                    <br></br>
                    <Button sx={{marginLeft: "50px"}} variant='contained' onClick={handleClick}>Kirjaudu sisään</Button>
            </Box>
            <Box>
                <Typography>
                    <h1>Käyttäjätiedot ja salasanat </h1>
                    <div className="data-grid">
                        <table>
                        <thead>
                            <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Admin</th>
                            <th>Henkilostoid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                            <tr key={item.username}>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{(item.admin === null)?"no":"yes"}</td>
                                <td>{item.henkilostoid}</td>
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
