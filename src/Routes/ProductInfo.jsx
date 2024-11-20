import {Container, Typography, Box, Rating, IconButton, Button } from '@mui/material'
import Grid from '@mui/material/Grid2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'

const ProductInfo = () => {
  return (
    <>
    <NavBar />
    <Container >
    <Grid container spacing={2} sx={{minHeight: 'calc(100vh - 130px)', boxSizing: 'border-box', py: 5}}>
        <Grid size={3}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black'}}>
        <img src='https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png' />
        </Box>
        </Grid>
        <Grid size={8}>
            <Box sx={{display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-start', alignItems:'flex-start' }}>
        <Typography variant='h6' align='center' color='#00897b' sx={{my: 1, px: 1, fontWeight: 'bold'}}>Watch Gold for Women</Typography>
        <Typography variant='subtitle1' align='center' sx={{px: 1, fontWeight: 400}}>by Fashion Gold</Typography>
        </Box>
        <Box sx={{display: 'flex', gap: 2, alignItems: 'center', py: 2}}>
        <Rating value={4.4} precision={0.1} readOnly />
        <Typography variant='body2'>(Rating: 4.4)</Typography>
        </Box>
        <Box>
            <Typography variant='body2'>Womens Jewellery</Typography>
            <Typography variant='body1' sx={{fontWeight: 'bold'}}>€ 799.99</Typography>
        </Box>
        <Box sx={{py: 2}}>
          <Typography>The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.</Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
        <input type="number" style={{paddingLeft: 3, width: '35px', height: '25px', borderRadius: 5}} min={1} max={5} />
        <Button startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
        </Box>
        </Grid>
    </Grid>
    </Container >
    <Footer />
    </>
  )
}

export default ProductInfo