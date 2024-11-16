import {Box, Typography, Container} from '@mui/material'
import {useLocation, Link} from 'react-router-dom'
import NavBar from "../Componenets/NavBar"
import Footer from "../Componenets/Footer"

const ErrorPath = () => {
    const location = useLocation()
  return (
    <>
    <NavBar />

    <Container>
    <Box sx={{minHeight: 'calc(100vh - 130px)', 
      display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 3,
      py: 3, boxSizing: 'border-box'}}>
        <Typography variant='h3' align='center' color='#00897b'>Error 404: Page '{location.pathname}' not found </Typography>
        <Link to='/' style={{textDecoration: 'none'}}><Typography variant='h4'>Back Home</Typography></Link>
    </Box>
    </Container>
    <Footer />
    </>
    
  )
}

export default ErrorPath