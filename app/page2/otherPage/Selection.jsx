'use client';

import React, { useState } from 'react';
import { 
  Grid2, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Avatar,
  Box,
  Container
} from '@mui/material';
import { useRouter } from 'next/navigation';

const Selection = () => {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelect = (id) => {
    setSelectedCharacter(id === selectedCharacter ? null : id);
  };

  const startSession = () => {
    router.push('/page1');
  }
  const createCard = (id, name, description, rotation, imagePath) => (
    <Grid2 item>
      <Card 
        sx={{ 
          maxWidth: 450, 
          textAlign: 'center',
          transform: `rotate(${rotation}deg)`,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.6s ease-in-out, background-color 0.3s ease-in-out',
          backgroundColor: selectedCharacter === id ? '#77dd77' : 'white',
          '&:hover': {
            transform: 'rotate(0deg) scale(1.05)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
          },
        }}
      >
        <CardContent>
          <Avatar
            src={imagePath}
            sx={{ width: 250, height: 250, margin: '0 auto 16px', bgcolor: 'grey' }}
          /> 
          <Typography variant="h5" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleSelect(id)}
            sx={{ 
              mt: 2, 
              borderRadius: 20, 
              textTransform: 'none',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out',
              backgroundColor: selectedCharacter === id ? '#556b2f' : '',
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: selectedCharacter === id ? '#556b2f' : '',
              },
            }}
          >
            {selectedCharacter === id ? 'Selected!' : 'Pick me!'}
          </Button>
        </CardContent>
      </Card>
    </Grid2>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Grid2 container spacing={19} justifyContent="center">
          {createCard(1, 'Tutor', '"Learning is our priority."', -3, '/assets/lebrontrainer.png')}
          {createCard(2, 'BuddyBuddy', '"help me out lil bro!"', 0, '/assets/turtle.png')}
          {createCard(3, 'Your Therapist', '"What keeps you up at night?"', 3, '/assets/pikachu.png')}
        </Grid2>
      </Container>
        <Button onClick = {startSession}>Start</Button>
    </Box>
  );
};

export default Selection;