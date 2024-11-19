import {Container, Typography, Box} from '@mui/material'
import Grid from '@mui/material/Grid2';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const ContactUs = () => {
  return (
    <>
    <NavBar />
    <Container>
    <Box sx={{height: 'calc(100vh - 175px)', boxSizing: 'border-box', my: 3}}>
        <Typography align='center' variant='h4' sx={{fontWeight: '400', mb: 4}}>CONTACT US</Typography>
        <Grid container spacing={2}>
            <Grid size='grow'>
                <img src='contactus.jpg' width='100%'  style={{ margin: 'auto'}}/>
            </Grid>
            <Grid size='grow'>
                <Box sx={{height: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Typography variant='h6' sx={{fontWeight: '500', mb: 3}}>Our Store</Typography>
                <Typography>428 Union St.</Typography>
                <Typography sx={{mb: 4}}>New York, NY 10028</Typography>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}><PhoneIcon /><Typography>(585) 306-6208</Typography></Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <AlternateEmailIcon />
                <Typography>info@fashioneshop.com</Typography>
                </Box>
                </Box>
            </Grid>
        </Grid>
        </Box>
    </Container>
    <Footer />
    </>
  )
}

export default ContactUs