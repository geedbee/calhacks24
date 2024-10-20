import React from "react";
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   Container,
   Avatar
} from "@mui/material";

const NavBarStyle = {
     background: 'transparent', 
     width: "90vw", 
     top: '20px', left: '5%', 
     right: '5%', 
     p: .5, 
     borderRadius: '15px',
     backdropFilter: 'blur(3px)',
     boxShadow: '1px 5px 20px 1px lightgrey'
}

const Navbar = () => {
return (
     <AppBar position="fixed" elevation={0} sx={NavBarStyle}>
          <Toolbar >
                <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                     <Avatar src="/assets/logo.png" sx={{ width: 30, height: 30 }} />
                     <Typography variant="h6" component="div" sx=
                     {{ 
                         flexGrow: 1,
                         color: "#347FC4", 
                         letterSpacing: '1px',
                         fontSize: '.8rem'
                     }}>
                          Study Buddy
                     </Typography>
                </Container>
                <Container>
                </Container>

          </Toolbar>
     </AppBar>
);
   }


export default Navbar;