import {Container, Box, Typography, Stack, TextField, Button} from '@mui/material'
import Grid from '@mui/material/Grid2';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'
import CartTotals from '../Componenets/CartTotals'
import CreditCard from '../Componenets/CreditCard';

const Checkout = () => {
 

  return (
    <>
    <NavBar />
    <Container>
    <Box sx={{height: 'calc(100vh - 180px)', boxSizing: 'border-box', my: 3}}>
        <Grid container spacing={2}>
          <Grid size={5}>
            <Stack direction={'column'} >
            <Typography variant='h6' align='left' sx={{mb: 3}}>DELIVERY INFORMATION</Typography>
            <Stack direction={'row'} sx={{gap: 5, my: 1}}>
            <TextField type='text' size="small" label='First Name' sx={{width: 1}} />
            <TextField type='text' size="small" label='Last Name' sx={{width: 1}} />
            </Stack>
            <TextField type='text' size="small" label='Email' sx={{my: 1}} />
            <TextField type='text' size="small" label='Street' />
            <Stack direction={'row'} sx={{gap: 5, my: 1}}>
            <TextField type='text' size="small" label='City' sx={{width: 1}} />
            <TextField type='text' size="small" label='State' sx={{width: 1}} />
            </Stack>
            <Stack direction={'row'} sx={{gap: 5, my: 1}}>
            <TextField type='text' size="small" label='Zipcode' sx={{width: 1}} />
            <TextField type='text' size="small" label='Country' sx={{width: 1}} />
            </Stack>
            <TextField type='text' size="small" label='Phone' sx={{my: 1}} />
            </Stack>
          </Grid>
          <Grid size={3}>
            <Box></Box>
          </Grid>
          <Grid size={4}>
            <Stack direction={'column'}>
        <CartTotals />
            <CreditCard />
            <Button variant='contained' size='large'>PLACE ORDER</Button>
        </Stack>
        </Grid>
        </Grid>
    </Box>
    </Container>
    <Footer />
    </>
  )
}

export default Checkout