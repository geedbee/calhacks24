import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Avatar
} from '@mui/material';

const Teach = () => {
return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', height: '50%',  }}>
                <Avatar
                    alt="Study Buddy"
                    src="assets/teach.png"
                    sx={{ width: '100%', height: 'auto', aspectRatio: '1/1', bgcolor: '#cccccc' }}
                >
                </Avatar>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', textAlign: 'center' }}>
        
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', width: '50%', height: '50%', }}>
                <Typography variant="h2" component="h1">
                    TEACH.
                </Typography>
                <Typography variant="body1" component="p">
                Explain your study concepts aloud, and our AI buddy will listen and transcribe its own understanding to be there with you on your learning journey.
                </Typography>
            </Box>
        </Container>
    </Box>
);
};

export default Teach;