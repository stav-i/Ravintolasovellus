import { Stack, Typography } from "@mui/material";
import React, { FC } from "react";

const Footer: FC = () => {
    return (
        <>
        <Stack sx=
        {{ 
            backgroundColor: "black",
             border: "4px solid black" ,
             font: "Roboto",
             color: "white"
             
        }}
         alignItems="center">
          <Typography variant="subtitle1" fontSize={"25px"}>YHTEYSTIEDOT
          <br/>

                                Patteristonkatu 2, 50100 MIKKELI
                                <br/>

                                ravintolatalli@xamk.fi
                                <br/>

                                puh. 0153 557 419

 </Typography>
        </Stack>
        
        </>

    );

}

export default Footer;
