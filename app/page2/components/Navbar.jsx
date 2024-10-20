import React from "react";
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   Container,
   Avatar
} from "@mui/material";


const Navbar = () => {
return (
     <AppBar position="fixed" color="transparent" elevation={0} sx={{ width: "100vw", bgcolor: "#D8A7D8", top: 0, left: 0, p: .5 }}>
          <Toolbar>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                     <Avatar src="/assets/logo.png" sx={{ width: 60, height: 60 }} />
                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          Buddy Study
                     </Typography>
                </Container>
          </Toolbar>
     </AppBar>
);
   }


export default Navbar;