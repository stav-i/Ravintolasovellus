import { Box, Container, Typography, Button, TextField, colors } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { UserData, fetchData2 } from '../axios';


  const Profile = () => {
    const navigoi = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repassword, setRePassword] = useState<string>("");
  
    const handleLogin = async () => {
      try {
        const userData: UserData = { username, password, repassword };
        const response = await fetchData2(userData);
  
        if (response.status === 201) { // Check for the correct status code
          alert("User registered successfully");
          navigoi("/profile"); // Navigate only if registration is successful
        } else {
          alert("Error registering user");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong");
      }
    };
    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <br/>
            <Box sx={{ marginLeft: "334px", alignItems: "center", justifyContent: "center", width: "484px"}}>
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
                         <TextField sx={{backgroundColor: "white"}}
                            label="Re-enter password"
                            fullWidth
                            variant="outlined"
                            type="password"
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
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
                         Create
                        </Button>
                        <br />
                        <br />
                        <Typography onClick={() => navigoi("/")} textAlign={'center'}>Cancel account creation <a href="#">Cancel</a></Typography>
                    </form>
            </Box>
        </Container>
    );
};

export default Profile;
