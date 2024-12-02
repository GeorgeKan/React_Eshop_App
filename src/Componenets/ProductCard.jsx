import {Paper, Stack, Typography, Rating, IconButton} from '@mui/material'
import Grid from '@mui/material/Grid2';
import {useCartStore} from '../store/store'
import { CgMore } from "react-icons/cg";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useNavigate} from 'react-router-dom'
import { toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

  const ProductCard = ({size, product}) => {  
  const navigate = useNavigate()
  const {addToCart, cart} = useCartStore()

  const notify = () => toast.success(`1 ${product.title} added to cart`, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,

    });


  const handleAddToCart = () => {
    addToCart(product.$id, 1)
    notify()
  }


  return (
    <Grid size={size}>
    <Paper elevation={3} square>
      <Stack direction={'column'}>
        <img src={product.image} />
        <Typography variant='h6' align='center' color='#00897b' 
        onClick={() => navigate(`/product/${product.$id}`)}
        sx={{my: 1, px: 1, fontWeight: 'bold', cursor: 'pointer'}}>{product.title}</Typography>
        <Typography variant='subtitle2' align='center' sx={{px: 1}}>by {product.brand}</Typography>
        <Stack direction={'row'} sx={{alignItems: 'center', my: 1, px: 2}}>
        <Rating value={product.rating} precision={0.1} readOnly />
        <Typography variant='subtitle2' sx={{flexGrow: 1, ml: 1}}>{product.rating}</Typography>
        <Typography variant='body1' sx={{fontWeight: 'bold'}}>€ {product.price}</Typography>
        </Stack>
        <Typography variant='body2' sx={{px: 1, py: 1}}>{product.description.length > 115 ? product.description.substring(0,115) + '...' : product.description}</Typography>        
        <Stack direction={'row'} sx={{justifyContent: 'center', my: 2}} spacing={3}>
        <IconButton sx={{color: '#719BA9'}} onClick={() => navigate(`/product/${product.$id}`)}><CgMore sx={{fontSize: 30}}/></IconButton>
        <IconButton onClick={handleAddToCart} sx={{color: '#719BA9'}}><AddShoppingCartIcon sx={{fontSize: 30}} /></IconButton>
        </Stack>
      </Stack>
    </Paper>
    </Grid>
  )
}

export default ProductCard