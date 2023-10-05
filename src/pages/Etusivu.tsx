import { Box, Container, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from './Footer';

const Frontpage: FC = () => {

  

    const state = {date: new Date()}
 
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
           backgroundColor: "lightblue",
           paddingRight: 1.5,
           paddingLeft: 1.5,
           marginTop: "2px",
           border: "3px solid blue",
           width: "1200px"
         }}
         
       >
         
         <Stack>
           <Box sx={{ marginTop: "10px" }}>
             <Stack alignItems={"center"} bgcolor={"white"}>
             
             </Stack>
          
             <Stack textAlign={"center"}>
             
               <Typography variant="h3" style={{ fontFamily: "Roboto", color: "black", fontSize: "50px", textDecoration: "underline", border:"5px solid blue",  height: "100px", backgroundColor: "white"}}>Etusivu</Typography>
               
              
             </Stack>
 
             <Stack fontFamily={"Roboto"} style={{border: "5px solid blue", marginTop: "2px" , backgroundColor: "white", marginBottom: "2px", width: "1140px", height: "700px", fontSize: "40px"}}>
               
               <Stack alignItems={"center"}>   
 
               
 
                        
                 
               
               
               </Stack>
               
             </Stack>
 
             
             
           </Box>
         </Stack>
      
       <Footer/>
     </Container>
     
   );
 }
 
 export default Frontpage;