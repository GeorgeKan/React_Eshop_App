import {Container, Box, Typography, Stack, Divider, Button} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import {useNavigate} from 'react-router-dom'
import {useCartStore, useUserStore} from '../store/store'
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'
import CartProduct from '../Componenets/CartProduct'
import CartTotals from '../Componenets/CartTotals'
import PersonIcon from '@mui/icons-material/Person';

const Cart = () => {
  const navigate = useNavigate()
  const {cart} = useCartStore()
  const {isLogin} = useUserStore()

  return (
    <>
    <NavBar />
    <Container>
    <Box sx={{minHeight: 'calc(100vh - 180px)',  boxSizing: 'border-box', my: 3}}>
    <Typography align='left' variant='h5' sx={{fontWeight: '500', mb: 4}}>YOUR CART</Typography>
    <Divider orientation="horizontal" flexItem />
    <Stack spacing={2}  divider={<Divider orientation="horizontal" flexItem />}>
        {cart.map((c, i) => <CartProduct key={i} item={c}/>)} 
    </Stack>
    <Divider orientation="horizontal" flexItem sx={{mb: 3}} />
    <Grid container>
    <Grid size={5} offset={7}>
      <CartTotals />
      </Grid>
          <Grid size={5} offset={7}>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', width: 1, my: 3}}>
          {isLogin ?
          <Button variant='outlined' endIcon={<MdOutlineShoppingCartCheckout />} 
          onClick={() => navigate('/checkout')}>PROCEED TO CHECKOUT</Button>
          : <Button variant='outlined' endIcon={<PersonIcon />} 
          onClick={() => navigate('/login')}>LOGIN TO CHECKOUT</Button>}
          </Box>
      </Grid>
    </Grid>
    </Box>
    </Container>
    <Footer />
    </>
  )
}

export default Cart