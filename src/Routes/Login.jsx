import {Box, Paper, Typography, TextField, Stack} from '@mui/material'
import NavBar from '../Componenets/NavBar'

const Login = () => {
  return (
    <>
    <NavBar />
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, border: '1px solid red'}}>
        <Paper elevation={10} sx={{p: 3}}>
            <Stack direction={'column'}>
            <Typography variant='h6' align='center' sx={{mb: 3}}>Login Form</Typography>
            <TextField label='Email' sx={{width: '400px', my: 3}}/>
            <TextField label='Password' />

            </Stack>
        </Paper>
    </Box>
    </>
  )
}

export default Login