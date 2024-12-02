import {useState} from 'react'
import {Box, Paper, Typography, TextField, Stack, Button, Alert, AlertTitle} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import {useUserStore} from '../store/store'
import validator from 'validator';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const Login = () => {
  const [emailError, setEmainError] = useState('')
  const [showEmailError, setShowEmailError] = useState(false)
  const { isLogin, error, loginUser } = useUserStore();
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    let formOK = true
    const formData = new FormData(e.target)
    const data = {
      email: formData.get('email'),
      passwd: formData.get('password')
    }
    if(!validator.isEmail(data.email)) {
      formOK = false
      setEmainError("Give a valid email address")
      setShowEmailError(true)
    }
    if(formOK) {
    loginUser(data.email, data.passwd)
  }
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
            <TextField disabled={isLogin} type='text' name='email' error={showEmailError} helperText={emailError}
            onFocus={() => setShowEmailError(false)}
            label='Email'  sx={{width: '400px', my: 3}}/>
            <TextField disabled={isLogin} type='password' name='password' label='Password' />
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 1}}>
            <Button disabled={isLogin} type='submit' endIcon={<PersonIcon />} variant='outlined' sx={{width: '40%'}}>Login</Button>
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
      {isLogin && <Alert severity='info'><AlertTitle>Login</AlertTitle>
        You are Login
        <Button size="small" color='inxerit' variant='contained' startIcon={<ShoppingCartCheckoutIcon/>} 
    sx={{ml: 5}} onClick={() => navigate('/')}>
      Continue Shoping
    </Button>
      </Alert>}
    </Box>
    </Box>
    <Footer />
    </>
  )
}

export default Login