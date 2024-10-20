import React from 'react';
import Link from "next/link";
import { 
  Typography, 
  Container, 
  Box, 
  Avatar,
  Button
} from '@mui/material';

const Talk = () => {

return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', height: '50%', }}>
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
            <Box sx={{ textAlign: 'center', width: '50%', height: '50%',}}>
                <Typography variant="h2" component="h1">
                    TALK.
                </Typography>
                <Typography variant="body1" component="p">
                Your study buddy hears you, offering breaks when you sound tired, encouragement when you're losing interest, and help when you're confused!.
                </Typography>
            </Box>
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 16 }}>
            <Link href='/page2/otherPage' passHref>
            </Link>
        </Box>
    </Box>
);
};


export default Talk;