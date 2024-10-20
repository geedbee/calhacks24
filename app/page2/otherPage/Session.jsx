import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const currentMood = ['Happy', 'Focused', 'Motivated', 'Tired', 'Stressed', 'Hungry'];

const moodColors = {
  Happy: 'green',
  Focused: 'orange',
  Motivated: 'orange',
  Tired: 'orange',
  Stressed: 'red',
  Hungry: 'red',
};

const Session = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Left Sidebar */}
      <Paper sx={{ width: 250, p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom>
          STUDY BUDDY
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          TYPE SHTTT
        </Typography>
        <Button variant="contained" sx={{ mb: 2 }}>
          create
        </Button>
      </Paper>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Currently...
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          {currentMood.map((mood, index) => (
            <Chip
              key={index}
              label={mood}
              sx={{
                bgcolor: moodColors[mood],
                color: 'white',
              }}
            />
          ))}
        </Box>

        {/* Chat Area */}
        <Paper sx={{ p: 2, mb: 2, minHeight: 200 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2}}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mr: 1 }}>
              Study buddy
            </Typography>
            <Typography variant="body2">
              ft, yo mother goofy azz fking bugga as sht face. adding more words to see what its going to look like when we transcribe your notes to you.
            </Typography>
          </Box>
        </Paper>

        {/* Input Area */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="u wanna talk to your buddy?..."
            sx={{ mr: 1 }}
          />
          <DeleteIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Session;