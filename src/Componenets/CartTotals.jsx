import {Typography, Stack, Divider} from '@mui/material'
import Grid from '@mui/material/Grid2';

const CartTotals = () => {
  return (
        <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1}}>
          <Typography variant='h6' sx={{fontWeight: '500', mb: 2, ml: 1}}>CART TOTALS</Typography>
          <Stack direction='row' sx={{width: 1, justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant='subtitle1'>Subtotal</Typography>
            <Typography>€ 799.99</Typography>
          </Stack>
          <Divider orientation="horizontal" flexItem />
          <Stack direction='row' sx={{width: 1, justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant='subtitle1'>Shipping Fee</Typography>
            <Typography>€ 799.99</Typography>
          </Stack>
          <Divider orientation="horizontal" flexItem />
          <Stack direction='row' sx={{width: 1, justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant='subtitle1' sx={{fontWeight: '500'}}>Total</Typography>
            <Typography>€ 799.99</Typography>
          </Stack>
        </Stack>
  )
}

export default CartTotals