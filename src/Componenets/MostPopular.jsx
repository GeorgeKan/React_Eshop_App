import { Divider, Typography, CircularProgress, Box } from "@mui/material"
import Grid from '@mui/material/Grid2';
import {useProductsStore} from '../store/store'
import ProductCard from "./ProductCard"

const MostPopular = () => {

  const { products, loading, mostpopular } = useProductsStore();


  return (
    <>
    <Divider sx={{mt: 5}} />
    <Typography variant="h4" component={'div'} sx={{mx: 'auto', my: 3}} color='#00695c'>Most Popular Products</Typography>
    {loading ? <Box sx={{width: 1, py: 3, display: 'flex', justifyContent: 'center'}}><CircularProgress /></Box> : 
    <Grid container spacing={2}>
      {mostpopular.slice(0,8).map(p => <ProductCard key={p.$id} size={3} product={p} />)}
    </Grid>
}
    </>
  )
}

export default MostPopular