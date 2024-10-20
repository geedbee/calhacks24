import {
  Container, Box, Button
} from '@mui/material';
import Hero from './components/Hero'
import Teach from './components/Teach'
import Learn from './components/Learn'
import Talk from './components/Talk'
import Selection from './otherPage/Selection';


function Page2() { 
  return (
    <Box>
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Hero />
      <Teach />
      <Learn />
      <Talk />
    </Container>
      <Selection/>
    </Box>
  )
}

export default Page2