import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  Avatar, 
  Grid2
} from '@mui/material';

const Hero = () => {
return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GAY study buddy
                </Typography>
                <Button color="inherit">login</Button>
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Grid2 container spacing={16} alignItems="center">
                <Grid2 item md={6}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Your study friend to...
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Teach, talk, and learn
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 item md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar
                            alt="Study Buddy"
                            src="assets/lebron.png"
                            sx={{ width: 400, height: 400 }}
                        />
                    </Box>
                    <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic', textAlign: 'center' }}>
                        "yo u should take a break. im proud of u"
                    </Typography>
                </Grid2>
            </Grid2>
        </Container>
    </Box>
);
};

export default Hero;