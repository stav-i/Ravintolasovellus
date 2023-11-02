import { Box, Container, Typography, Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useState } from "react";

const Profile = () => {
    const navigoi = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Here, you can add your login logic.
        // For simplicity, we'll just check if the username and password are not empty.
        if (username && password) {
          // Redirect to another page after successful login
          navigoi("/");
        }
      };
    
    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <Box display="flex" sx={{ justifyContent: "center"}}>
                    <form style = {{backgroundColor: 'blue'}}>
                        <TextField
                            label="Username"
                            fullWidth
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            margin="normal"
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                        />
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                            fullWidth
                            sx={{textTransform: "none"}}
                            >
                            Login
                        </Button>
                    </form>
            </Box>
        </Container>
    );
};

export default Profile;
