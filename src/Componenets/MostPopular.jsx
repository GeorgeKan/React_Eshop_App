import { Divider, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import ProductCard from "./ProductCard"

const MostPopular = () => {
  return (
    <>
    <Divider sx={{mt: 5}} />
    <Typography variant="h4" component={'div'} sx={{mx: 'auto', my: 3}} color='#00695c'>Most Popular Products</Typography>
    <Grid container spacing={2}>
        <ProductCard size={3}/>
        <ProductCard size={3}/>
        <ProductCard size={3}/>
        <ProductCard size={3}/>
        <ProductCard size={3}/>
        <ProductCard size={3}/>
        <ProductCard size={3}/>
        <ProductCard size={3}/>
    </Grid>
    
    </>
  )
}

export default MostPopular