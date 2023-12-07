import { Box, Container, Typography, Button, TextField, colors } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { FC, useState } from "react";
import { light } from '@mui/material/styles/createPalette';
import { url } from 'inspector';
import { UserData, fetchData3 } from '../axios';
import { user } from '../types';

type Props={
  currentuser: user;
  setuser: (name:string, role:number)=>void;
}

const Login: FC<Props>=({currentuser,setuser})=>{
    const navigoi = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
          
          if (!username || !password) {
            throw new Error('Username and password cannot be empty');
          }
      
          // If validation passes, create the userData object
          const userData: UserData = { username, password, repassword: '' };
      
          // Now check if the fields are non-empty before making the API call
          if (userData.username && userData.password) {
            const response = await fetchData3(userData);
      
            if (response.status === 200) {
              //console.log("login successful");
              setuser(response.data.username,1);
              navigoi('/profile'); // Navigate only if registration is successful
            }
          } else {
            throw new Error('Invalid input data');
          }
        } catch (error: any) {
          console.error('Error:', error.message);
          alert(error.message);
        }
      };
    
    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <Box display="flex" sx={{ marginTop: "24px", alignItems: "center", justifyContent: "center"}}>
                    <form style = {{
                        border: "3px solid #000",
                        padding: "16px",
                        backgroundImage: `url(${'https://png.pngtree.com/thumb_back/fh260/background/20200804/pngtree-bright-color-gradient-gradation-change-background-image_377133.jpg'})`,
                        borderRadius: "5px",
                        height: "500px",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                        }}>
                         <TextField sx={{backgroundColor: "white"}}
                            label="Username"
                            fullWidth
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            margin="normal"
                        />
                        <TextField sx={{backgroundColor: "white"}}
                            label="Password"
                            fullWidth
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                        />
                        <br />
                        <br />
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                            fullWidth
                            sx={{
                                textTransform: "none",
                                backgroundColor: "#ffa07a",
                            }}
                            >
                            Login
                        </Button>
                        <br />
                        <br />
                        <Typography onClick={() => navigoi("/createprofile")} textAlign={'center'}>Not a member? <a href="#">Sign up!</a></Typography>
                    </form>
            </Box>
        </Container>
    );
};

export default Login;
