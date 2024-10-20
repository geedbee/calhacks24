import {
  Fade, Container, Box, Button
} from '@mui/material';
import Hero from './components/Hero'
import Teach from './components/Teach'
import Learn from './components/Learn'
import Talk from './components/Talk'
import Selection from './otherPage/Selection';


function Page2() { 
  const mainContainerStyle = {
    mt: 2,
  }
  return (
    <Box>
    <Container maxWidth="lg" sx={mainContainerStyle}>
      <Fade in timeout={1000}>
        <Hero />
      </Fade>
      <Fade in timeout={1000}>
        <Teach />
      </Fade>
      <Fade in timeout={1000}>
        <Learn />
        </Fade>
        <Fade in timeout={1000}>
        <Talk />
        </Fade>
    </Container>
      <Selection/>
    </Box>
  )
}

export default Page2