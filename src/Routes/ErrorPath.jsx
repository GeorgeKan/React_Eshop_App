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
    <Box sx={{minHeight: 'calc(100vh - 130px)', border: '1px solid red'}}>
        <Typography>Page {location.pathname} does not found</Typography>
        <Link to='/'>Go Home</Link>
    </Box>
    </Container>
    <Footer />
    </>
    
  )
}

export default ErrorPath