import {Box, Paper, Typography, TextField, Stack, Button} from '@mui/material'
import {Link} from 'react-router-dom'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const Register = () => {
  return (
    <>
    <NavBar />
    <Box sx={{minHeight: 'calc(100vh - 180px)', boxSizing: 'border-box'}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5}}>
        <Paper elevation={10} sx={{p: 3}}>
            <Stack direction={'column'}>
            <Typography variant='h6' align='center' sx={{mb: 3}}>Register new user</Typography>
            <TextField error='True' label='Name' helperText='Your Name' sx={{width: '400px'}}/>
            <TextField error='True' label='Email' helperText='Your Email Address' sx={{width: '400px', my: 3}}/>
            <TextField type='password' helperText='Suggested to use a strong password (min length 8 characters)' label='Password' />
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 1}}>
            <Button endIcon={<HowToRegIcon />} variant='outlined' sx={{width: '40%'}}>Register</Button>
            </Box>
            <Box sx={{mt: 2}}>
              <Typography align='center'>Already Have an Account? <Link to='/login' style={{textDecoration: 'none'}}>Login</Link></Typography>
            </Box>
            </Stack>
        </Paper>
    </Box>
    </Box>
    <Footer />
    </>
  )
}

export default Register