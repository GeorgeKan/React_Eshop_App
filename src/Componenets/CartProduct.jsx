import {Box, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartProduct = () => {
  return (
    <Grid container spacing={2}>
        <Grid size={2} >
        <img src='https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/thumbnail.png' width='128' />
        </Grid>
        <Grid size={5}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', height: 1}}>
            <Typography variant='body1' sx={{fontWeight: '500'}}>Watch Gold for Women</Typography>
            <Typography variant='subtitle1'>€ 799.99</Typography>
            </Box>
        </Grid>
        <Grid size={3}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 1}}>
        <input type="number" style={{paddingLeft: 3, width: '40px', height: '30px', borderRadius: 5}} value={1} min={1} max={5} />
        </Box>
        </Grid>
        <Grid size={2}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 1}}>        
            <DeleteForeverIcon sx={{fontSize: '30px'}} />
            </Box>
        </Grid>

    </Grid>
  )
}

export default CartProduct