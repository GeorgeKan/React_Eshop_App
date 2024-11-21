import {Paper, Stack, Typography, Rating, IconButton} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { CgMore } from "react-icons/cg";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useNavigate} from 'react-router-dom'

  const ProductCard = ({size, product}) => {  
  const navigate = useNavigate()

  return (
    <Grid size={size}>
    <Paper elevation={3} square>
      <Stack direction={'column'}>
        <img src={product.image} />
        <Typography variant='h6' align='center' color='#00897b' sx={{my: 1, px: 1, fontWeight: 'bold'}}>{product.title}</Typography>
        <Typography variant='subtitle2' align='center' sx={{px: 1}}>by {product.brand}</Typography>
        <Stack direction={'row'} sx={{alignItems: 'center', my: 1, px: 2}}>
        <Rating value={product.rating} precision={0.1} readOnly />
        <Typography variant='subtitle2' sx={{flexGrow: 1, ml: 1}}>{product.rating}</Typography>
        <Typography variant='body1' sx={{fontWeight: 'bold'}}>€ {product.price}</Typography>
        </Stack>
        <Typography variant='body2' sx={{px: 1, py: 1}}>{product.description.length > 115 ? product.description.substring(0,115) + '...' : product.description}</Typography>        
        <Stack direction={'row'} sx={{justifyContent: 'center', my: 2}} spacing={3}>
        <IconButton sx={{color: '#719BA9'}} onClick={() => navigate(`/product/${product.$id}`)}><CgMore sx={{fontSize: 30}}/></IconButton>
        <IconButton sx={{color: '#719BA9'}}><AddShoppingCartIcon sx={{fontSize: 30}} /></IconButton>
        </Stack>
      </Stack>
    </Paper>
    </Grid>
  )
}

export default ProductCard