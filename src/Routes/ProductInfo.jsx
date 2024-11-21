import {useEffect, useState} from 'react'
import {Container, Typography, Box, Rating, CircularProgress, Button } from '@mui/material'
import Grid from '@mui/material/Grid2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useParams} from 'react-router-dom'
import {useProductsStore} from '../store/store'
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const ProductInfo = () => {
  const {id} = useParams()
  const { products, categories, getProducts } = useProductsStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length == 0 || categories.length == 0) {
      getProducts();
    }
    setProduct(products.find((p) => p.$id == id));
  }, [products]);


  return (
    <>
    <NavBar />
    <Container >
    { !product?.image ? <Box sx={{minHeight: 'calc(100vh - 130px)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', py: 5}}><CircularProgress /></Box> : 
    <Grid container spacing={2} sx={{minHeight: 'calc(100vh - 130px)', boxSizing: 'border-box', py: 5}}>
        <Grid size={3}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black'}}>
        <img src={product.image} />
        </Box>
        </Grid>
        <Grid size={8}>
            <Box sx={{display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-start', alignItems:'flex-start' }}>
        <Typography variant='h6' align='center' color='#00897b' sx={{my: 1, px: 1, fontWeight: 'bold'}}>{product.title}</Typography>
        <Typography variant='subtitle1' align='center' sx={{px: 1, fontWeight: 400}}>by {product.brand}</Typography>
        </Box>
        <Box sx={{display: 'flex', gap: 2, alignItems: 'center', py: 2}}>
        <Rating value={product.rating ? product.rating : 1.1} precision={0.1} readOnly />
        <Typography variant='body2'>(Rating: {product.rating})</Typography>
        </Box>
        <Box>
            <Typography variant='body2'>{product.category}</Typography>
            <Typography variant='body1' sx={{fontWeight: 'bold'}}>€ {product.price}</Typography>
        </Box>
        <Box sx={{py: 2}}>
          <Typography>{product.description}</Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
        <input type="number" style={{paddingLeft: 3, width: '35px', height: '25px', borderRadius: 5}} min={1} max={5} />
        <Button startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
        </Box>
        </Grid>
    </Grid>}
    </Container >
    <Footer />
    </>
  )
}

export default ProductInfo