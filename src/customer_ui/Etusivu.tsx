import { Box, Container, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from './Footer';

const Frontpage: FC = () => {



  const state = { date: new Date() }

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);




  return (
    <Container


      sx={{
        fontFamily: "Montserrat",
        backgroundColor: "lightblue",
        paddingRight: 1.5,
        paddingLeft: 1.5,
        marginTop: "2px",
        border: "3px solid black",
        width: "1200px"
      }}

    >

      <Stack>
        <Box sx={{ marginTop: "10px" }}>

          <Stack textAlign={"center"}>

            <Typography variant="h3" style={{ fontFamily: "Montserrat", color: "white", fontSize: "70px", border: "5px solid black", height: "100px", backgroundColor: "black" }}>Ravintola Talli</Typography>


          </Stack>

          <Stack fontFamily={"Montserrat"} style={{ border: "5px solid black", marginTop: "2px", backgroundColor: "white", marginBottom: "2px", width: "1140px", height: "700px", fontSize: "40px" }}>


            <Stack >
              <img style={{ marginTop: "0px", width: '1132px', height: '240px' }} src="https://www.xamkravintolat.fi/wp-content/uploads/sites/2/2017/02/talli_ylakuva.jpg" className="Etusivukuva" alt="logo" />

              <Stack >

                <Box marginLeft={"40px"} marginTop={"20px"} border={"5px solid black"} width={"400px"} display={"flex"} flexDirection={"row"}>


                  <Box fontSize={"25px"}>
                    <Typography fontSize={"40px"} alignItems={"center"} >Avoinna</Typography>
                    <p>Ravintola Talli palvelee ma – pe klo 9-15
                      <br />
                      Lounas klo 11-14
                      <br />
                      Iltaisin ja viikonloppuisin tilauksesta.</p>
                  </Box>

                  <Box fontSize={"25px"} marginLeft={"400px"} border={"5px solid black"} width={"400px"}>
                    <Typography fontSize={"40px"} alignItems={"center"} >Ruokalista</Typography>

                    <p>Ruokalista</p>

                  </Box>
                </Box>



              </Stack>


            </Stack>

          </Stack>



        </Box>
      </Stack>

      <Footer />
    </Container>

  );
}

export default Frontpage;