import {Paper, Stack, Typography, Rating, Button, IconButton} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { CgMore } from "react-icons/cg";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({size}) => {
  const desc = 'The Gold Womens Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.'
  return (
    <Grid size={size}>
    <Paper elevation={3} square>
      <Stack direction={'column'}>
        <img src='https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/thumbnail.png' />
        <Typography variant='h6' align='center' color='#00897b' sx={{my: 1, px: 1, fontWeight: 'bold'}}>Watch Gold for Women</Typography>
        <Typography variant='subtitle2' align='center' sx={{px: 1}}>by Fashion Gold</Typography>
        <Stack direction={'row'} sx={{alignItems: 'center', my: 1, px: 2}}>
        <Rating value={4.4} precision={0.1} readOnly />
        <Typography variant='subtitle2' sx={{flexGrow: 1, ml: 1}}>4.4</Typography>
        <Typography variant='body1' sx={{fontWeight: 'bold'}}>€ 799.99</Typography>
        </Stack>
        <Typography variant='body2' sx={{px: 1, py: 1}}>{desc.length > 2120 ? desc.substring(0,120) + '...' : desc}</Typography>
        <Stack direction={'row'} sx={{justifyContent: 'center', my: 2}} spacing={3}>
        <IconButton sx={{color: '#719BA9'}}><CgMore sx={{fontSize: 30}}/></IconButton>
        <IconButton sx={{color: '#719BA9'}}><AddShoppingCartIcon sx={{fontSize: 30}} /></IconButton>
        </Stack>
      </Stack>
    </Paper>
    </Grid>
  )
}

export default ProductCard