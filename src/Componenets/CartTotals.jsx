import {Typography, Stack, Divider} from '@mui/material'
import {useCartStore} from '../store/store'

const CartTotals = () => {
  const {cart} = useCartStore()

  const calulateCost = () => {
    let subTotal = 0;
    let shippingFee = 0;
    let total = 0;
    cart.forEach((c) => {
      subTotal += c.temaxia * c.product.price;
      shippingFee += c.temaxia * 5;
      total += subTotal
    });

    return {subTotal: subTotal.toFixed(2), shippingFee: shippingFee.toFixed(2), total: total.toFixed(2)}
  }

  return (
        <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1}}>
          <Typography variant='h6' sx={{fontWeight: '500', mb: 2, ml: 1}}>CART TOTALS</Typography>
          <Stack direction='row' sx={{width: 1, justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant='subtitle1'>Subtotal</Typography>
            <Typography>€ {calulateCost().subTotal}</Typography>
          </Stack>
          <Divider orientation="horizontal" flexItem />
          <Stack direction='row' sx={{width: 1, justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant='subtitle1'>Shipping Fee</Typography>
            <Typography>€ {calulateCost().shippingFee}</Typography>
          </Stack>
          <Divider orientation="horizontal" flexItem />
          <Stack direction='row' sx={{width: 1, justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant='subtitle1' sx={{fontWeight: '500'}}>Total</Typography>
            <Typography>€ {calulateCost().total}</Typography>
          </Stack>
        </Stack>
  )
}

export default CartTotals