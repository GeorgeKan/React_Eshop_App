import {Container, Typography, Box, Paper} from '@mui/material'
import Grid from '@mui/material/Grid2';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const About = () => {
  return (
    <>
    <NavBar />
        <Container>
        <Box sx={{mt: 3, mb: 5}}>
        <Typography align='center' variant='h4' sx={{fontWeight: '400', mb: 4}}>ABOUT US</Typography>
        <Grid container spacing={2}>
            <Grid size={4}>
                <img src='about.jpg' width='100%'/>
            </Grid>
            <Grid size={8}>
                
                <Typography variant='body1' align='justify' sx={{my: 3}}>Fashion Eshop was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</Typography>

                <Typography variant='body1' align='justify'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty for every men and women to accessories and jewelries, we offer an extensive collection sourced from trusted brands and suppliers.</Typography>
                <Typography variant='h6' sx={{fontWeight: '400', my: 4}}>Our Mission</Typography>
                <Typography variant='body1' align='justify'>Our mission at Fashio Eshop is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</Typography>
            </Grid>
            </Grid>
            <Typography variant='h6' sx={{fontWeight: '500', my: 4}}>WHY CHOOSE US</Typography>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Paper elevation={3}>
                  <Box sx={{p: 4}}>
                    <Typography align='left' variant='body1' sx={{fontWeight: 'bold', mb: 2}}>Quality Assurance:</Typography>
                    <Typography align='justify' variant='subtitle1'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid size={4}>
                <Paper elevation={3}>
                  <Box sx={{p: 4}}>
                    <Typography align='lect' variant='body1' sx={{fontWeight: 'bold', mb: 2}}>Convenience:</Typography>
                    <Typography align='justify' variant='subtitle1'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid size={4}>
                <Paper elevation={3}>
                  <Box sx={{p: 4}}>
                    <Typography align='lect' variant='body1' sx={{fontWeight: 'bold', mb: 2}}>Exceptional Customer Service:</Typography>
                    <Typography align='justify' variant='subtitle1'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</Typography>
                  </Box>
                </Paper>
              </Grid>
              
            </Grid>
        </Box>
        </Container>
    <Footer />
    </>
  )
}

export default About