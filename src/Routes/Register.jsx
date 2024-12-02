import {useState} from 'react'
import {Box, Paper, Typography, TextField, Stack, Button, Alert, AlertTitle} from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Link,useNavigate} from 'react-router-dom'
import {useUserStore} from '../store/store'
import validator from 'validator';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const Register = () => {

  const navigate = useNavigate()
  const [nameError, setNameError] = useState('')
  const [showNameError, setShowNameError] = useState(false)
  const [emailError, setEmainError] = useState('')
  const [showEmailError, setShowEmailError] = useState(false)
  const [passwdError, setPasswdError] = useState('Suggested to use a strong password (min length 8 characters)')
  const [showPasswdError, setShowPasswdError] = useState(false)

  const { isLogin, error, registerUser, registered } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formOK = true
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      passwd: formData.get('passwd'),
      passwd2: formData.get('passwd2')
    }
    if(data.name.length <=3) {
      formOK = false
      setNameError('Name too short. (min length 3 characters)')
      setShowNameError(true)
    }
    if(!validator.isEmail(data.email)) {
      formOK = false
      setEmainError("Give a valid email address")
      setShowEmailError(true)
    }
    if(data.passwd != data.passwd2) {
      formOK = false
      setPasswdError("Passwords do not match")
      setShowPasswdError(true)
    }
    if(data.passwd.length < 8) {
      formOK = false
      setPasswdError("Password min length 8 characters")
      setShowPasswdError(true)
    }
    if(formOK) {
    await registerUser(data.name, data.email, data.passwd)
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
            <Typography variant='h6' align='center' sx={{mb: 3}}>Register new user</Typography>
            <TextField disabled={isLogin} name='name' error={showNameError} label='Name' helperText={nameError} 
            sx={{width: '400px'}} onFocus={() => setShowNameError(false)}/>
            <TextField disabled={isLogin} name = 'email' error={showEmailError} label='Email' helperText={emailError}
             sx={{width: '400px', my: 3}} onFocus={() => setShowEmailError(false)}/>
            <TextField disabled={isLogin} name= 'passwd' error={showPasswdError} type='password' helperText={passwdError} label='Password'
            onFocus={() => setShowPasswdError(false)} sx={{mb: 2}} />
            <TextField disabled={isLogin} name='passwd2' error={showPasswdError} type='password' label='Retype Password' onFocus={() => setShowPasswdError(false)}/>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3, mb: 1}}>
            <Button disabled={isLogin} type='submit' endIcon={<HowToRegIcon />} variant='outlined' sx={{width: '40%'}}>Register</Button>
            </Box>
            <Box sx={{mt: 2}}>
              <Typography align='center'>Already Have an Account? <Link to='/login' style={{textDecoration: 'none'}}>Login</Link></Typography>
            </Box>
            </Stack>
            </form>
        </Paper>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      {error && <Alert severity='error'><AlertTitle>Registration Error</AlertTitle>{error}</Alert>}
      {isLogin && <Alert severity={registered ? "success" : "info"} sx={{px: 5}}>
        <AlertTitle>{registered ? "Success" : "Already Registered"}</AlertTitle>
    {registered ? "Regitration Completed Successfuly" : "You are already registered"}
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

export default Register