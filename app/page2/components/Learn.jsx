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
            <Box sx={{ textAlign: 'center', width: '50%', height: 'auto' }}>
                <Typography variant="h2" component="h1">
                    LEARN.
                </Typography>
                <Typography variant="body1" component="p">
                    Explore three unique personas tailored to your learning style. Each persona provides personalized insights and support to enhance your environment!
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', height: 'auto' }}>
                <Avatar
                    alt="Study Buddy"
                    src='assets/learn.png'
                    variant='square'
                    sx={{ width: '100%', height: 'auto', aspectRatio: '1/1', bgcolor: '#cccccc' }}
                >
                </Avatar>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', textAlign: 'center' }}>
                    
                </Typography>
            </Box>
        </Container>
    </Box>
);
};

export default Learn;