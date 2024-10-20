import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Avatar
} from '@mui/material';

const Learn = () => {
return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12}}>
        <Box sx={{ textAlign: 'center', width: '50%', height: '50%',}}>
                <Typography variant="h2" component="h1">
                LEARN.
                </Typography>
                <Typography variant="body1" component="p">
                Let our study buddy enhance your learning by adding its own notes and simplifying concepts to ensure you truly understand.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', height: '50%',}}>
                <Avatar
                    alt="Study Buddy"
                    sx={{ width: '100%', height: 'auto', aspectRatio: '1/1', bgcolor: '#cccccc' }}
                >
                    S
                </Avatar>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', textAlign: 'center' }}>
                    "yo u should take a break. im proud of u"
                </Typography>
            </Box>
        </Container>
    </Box>
);
};

export default Learn;