import {Box, Paper, Typography, TextField, Stack, Button} from '@mui/material'
import {Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const Login = () => {
  return (
    <>
    <NavBar />
    <Box sx={{minHeight: 'calc(100vh - 180px)', boxSizing: 'border-box'}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5}}>
        <Paper elevation={10} sx={{p: 3}}>
            <Stack direction={'column'}>
            <Typography variant='h6' align='center' sx={{mb: 3}}>Login Form</Typography>
            <TextField error='True' label='Email' helperText='Your Email Address' sx={{width: '400px', my: 3}}/>
            <TextField type='password' helperText='Your password' label='Password' />
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 1}}>
            <Button endIcon={<PersonIcon />} variant='outlined' sx={{width: '40%'}}>Login</Button>
            </Box>
            <Box sx={{mt: 2}}>
              <Typography align='center'>Don't Have an Account? <Link to='/register' style={{textDecoration: 'none'}}>Register now</Link></Typography>
            </Box>
            </Stack>
        </Paper>
    </Box>
    </Box>
    <Footer />
    </>
  )
}

export default Login