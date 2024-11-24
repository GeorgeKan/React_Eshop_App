import {Box, Paper, Typography, TextField, Stack, Button, Alert, AlertTitle} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import {useUserStore} from '../store/store'
import PersonIcon from '@mui/icons-material/Person';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const Login = () => {
  const { isLogin, error, loginUser } = useUserStore();
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(event.target)
    const data = {
      email: formData.get('email'),
      passwd: formData.get('password')
    }
    loginUser(data.email, data.passwd)
  }

  return (
    <>
    <NavBar />
    <Box sx={{minHeight: 'calc(100vh - 180px)', boxSizing: 'border-box'}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5}}>
        <Paper elevation={10} sx={{p: 3}}>
          <form onSubmit={handleSubmit}>
            <Stack direction={'column'}>
            <Typography variant='h6' align='center' sx={{mb: 3}}>Login Form</Typography>
            <TextField type='text' name='email' error={error != ""} label='Email'  sx={{width: '400px', my: 3}}/>
            <TextField type='password' name='password' error={error != ""} label='Password' />
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 1}}>
            <Button type='submit' endIcon={<PersonIcon />} variant='outlined' sx={{width: '40%'}}>Login</Button>
            </Box>
            <Box sx={{mt: 2}}>
              <Typography align='center'>Don't Have an Account? <Link to='/register' style={{textDecoration: 'none'}}>Register now</Link></Typography>
            </Box>
            </Stack>
            </form>
        </Paper>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      {error && <Alert severity='error'><AlertTitle>Login Error</AlertTitle>{error}</Alert>}
      {isLogin && <Alert severity='info'></Alert>}
    </Box>
    </Box>
    <Footer />
    </>
  )
}

export default Login