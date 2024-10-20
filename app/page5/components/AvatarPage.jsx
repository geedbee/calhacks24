import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Paper, 
  Typography,
  Avatar,
  Chip,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const currentMood = ['Happy', 'Focused', 'Motivated', 'Tired', 'Stressed', 'Hungry'];

const moodColors = {
  Happy: '#81c784',
  Focused: '#ffcc80',
  Motivated: '#ffcc80',
  Tired: '#ffcc80',
  Stressed: '#ef5350',
  Hungry: '#ef5350',
};

const AvatarPage = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <Box sx={{ width: '100%', height: '100vh', p: 2, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, display: 'flex', mb: 2 }}>
        <Box 
          sx={{ 
            width: '50%',  
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Avatar
            src="/assets/leAvatar.png"
            alt="Character Avatar"
            variant='rounded'
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: 400,
              maxHeight: 450
            }}
          />
          <Paper 
            elevation={8} 
            sx={{ 
              position: 'absolute', 
              top: '10%', 
              right: '-60%', 
              borderRadius: '50%',
              p: 6, 
              maxWidth: '80%',
              maxHeight: '50%',
              bgcolor: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                wordWrap: 'break-word',
                textAlign: 'center' 
              }}
            >
              Text bubble to add in text haldhf jalsdjfalksdj adkfasdfkajsd lkfjal sdkjfalksdj falksdj flaksdjf; lkajsd;flkajjalsdjf alsdjflksadj kfjds 
            </Typography>
          </Paper>
        </Box>
      </Box>
      
      <Card sx={{ mt: 'auto', boxShadow: 3, position: 'relative' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', color: '#4a148c' }}>
              Currently feeling...
            </Typography>
            <IconButton sx={{ color: '#4a148c', bgcolor: 'red'}}>
              <MicIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            {currentMood.map((mood, index) => (
              <Chip
                key={index}
                label={mood}
                sx={{
                  bgcolor: moodColors[mood],
                  color: 'white',
                  borderRadius: '16px',
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AvatarPage;