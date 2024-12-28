import {Box, Typography, IconButton} from '@mui/material'
import Grid from '@mui/material/Grid2';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useCartStore} from '../store/store'

const CartProduct = ({item}) => {
  const {changeTemaxia, deleteFromCart} = useCartStore()
  return (
    <Grid container spacing={2}>
        <Grid size={2} >
        <img src={item.product.image} width='128' />
        </Grid>
        <Grid size={5}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', height: 1}}>
            <Typography variant='body1' sx={{fontWeight: '500'}}>{item.product.title}</Typography>
            <Typography variant='subtitle1'>€ {item.product.price}</Typography>
            </Box>
        </Grid>
        <Grid size={3}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 1}}>
        <input type="number" style={{paddingLeft: 3, width: '40px', height: '30px', borderRadius: 5}} 
        value={item.temaxia} onChange={e => changeTemaxia(item.product.$id, e.target.value)} min={1} max={5} />
        </Box>
        </Grid>
        <Grid size={2}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 1}}>        
            <IconButton onClick={() => deleteFromCart(item.product.$id)}><DeleteForeverIcon sx={{fontSize: '30px'}} /></IconButton>
            </Box>
        </Grid>

    </Grid>
  )
}

export default CartProduct