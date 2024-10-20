import {
  Container
} from '@mui/material';
import Hero from './components/Hero'
import Teach from './components/Teach'
import Learn from './components/Learn'
import Talk from './components/Talk'
import React from 'react';

function Page2() { 
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Hero />
      <Teach />
      <Learn />
      <Talk />
    </Container>
  )
}

export default Page2