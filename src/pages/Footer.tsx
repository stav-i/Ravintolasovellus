import { Stack, Typography } from "@mui/material";
import React, { FC } from "react";

const Footer: FC = () => {
    return (
        <>
        <Stack sx=
        {{ 
            backgroundColor: "lightblue",
             border: "4px solid black" ,
             font: "Roboto"
        }}
         alignItems="center">
          <Typography variant="subtitle1" fontSize={"35px"}>©Timpe's Legacy</Typography>
        </Stack>
        
        </>

    );

}

export default Footer;
