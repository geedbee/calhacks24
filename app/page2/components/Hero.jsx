import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Avatar, 
} from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Meet your new buddy...
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Teach, Learn, and Talk 
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              alt="Study Buddy"
              src="assets/lebron.png"
              sx={{ width: 400, height: 400 }}
            />
            <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic', textAlign: 'center' }}>
              "The Study Buddy AI is your emotionally intelligent companion, interacting naturally to provide support, motivation, and clarity—just like a friend!"
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;