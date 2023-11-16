import { Box, Container, Typography, Button, TextField, colors } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { light } from '@mui/material/styles/createPalette';
import { url } from 'inspector';


const Profile = () => {
    const navigoi = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginClick=(e: any)=>{
      handleLogin("lol");
    }
    const handleLogin = async (a:string) => {
      try {
        var resp=await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: username,
            pw: password
          })
        });
        var data=await resp.json();
        console.log(data);
      } catch (error: any) {
        console.error(error);
      }
        if (username && password) {
          // Redirect to another page after successful login
          //navigoi("/");
        }
      };
    
    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <Box display="flex" sx={{ marginTop: "25px", alignItems: "center", justifyContent: "center"}}>
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
                            onClick={loginClick}
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

export default Profile;
