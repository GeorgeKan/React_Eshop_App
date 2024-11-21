import {useEffect, useState} from 'react'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, CircularProgress, Box} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useParams} from 'react-router-dom'
import { PiEyedropperFill } from "react-icons/pi";
import { GiDelicatePerfume } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { PiDressFill } from "react-icons/pi";
import { MdWatch } from "react-icons/md";
import { FiWatch } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { GiWalkingBoot } from "react-icons/gi";
import { GiSteeltoeBoots } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import {useProductsStore} from '../store/store'
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'
import ProductCard from '../Componenets/ProductCard'

const  Collection = () => {
  const {id} = useParams()
  const { products, categories, getProducts, loading } = useProductsStore();
  const [category, setCategory] = useState('beauty')

  useEffect(() => {
    if (products.length == 0 || categories.length == 0) {
      getProducts();
    }
    setCategory(id ? id : 'beauty')
  }, [products]);

  const filteredProducts = () => {
    return products.filter(
      (p) => p.category == category
    );
  };

  const categoryName = () => {
    return categories.filter(c => c.catname == category)[0].title
  }

  return (
    <>
    <NavBar />
    <Grid container spacing={2} sx={{py: 3}}>
      <Grid size={2}>
        <Typography align='center' variant='h6'>Product Categories</Typography>
        <List>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><PiEyedropperFill /></ListItemIcon>
            <ListItemText primary='Cosmetics' onClick={() => setCategory('beauty')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiDelicatePerfume /></ListItemIcon>
            <ListItemText primary='Fragrances' onClick={() => setCategory('fragrances')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiBigDiamondRing /></ListItemIcon>
            <ListItemText primary='Womens Jewellery' onClick={() => setCategory('womens-jewellery')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><PiDressFill /></ListItemIcon>
            <ListItemText primary='Womens Dresses' onClick={() => setCategory('womens-dresses')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><FiWatch /></ListItemIcon>
            <ListItemText primary='Womens Watches' onClick={() => setCategory('womens-watches')}/>
          </ListItemButton>
          </ListItem>

          <ListItem>
          <ListItemButton>
            <ListItemIcon><FaShoppingBag /></ListItemIcon>
            <ListItemText primary='Womens Bags' onClick={() => setCategory('womens-bags')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiWalkingBoot /></ListItemIcon>
            <ListItemText primary='Womens Shoes' onClick={() => setCategory('womens-shoes')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><PiShirtFoldedFill /></ListItemIcon>
            <ListItemText primary='Mens Shirts' onClick={() => setCategory('mens-shirts')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><MdWatch /></ListItemIcon>
            <ListItemText primary='Mens Watches' onClick={() => setCategory('mens-watches')}/>
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiSteeltoeBoots /></ListItemIcon>
            <ListItemText primary='Mens Shoes' onClick={() => setCategory('mens-shoes')}/>
          </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      {!categories.length > 0 ? <Grid size={10}>
      <Box sx={{minHeight: 'calc(100vh - 130px)', boxSizing: 'border-box', 
              display: 'flex', justifyContent: 'center', alignItems: 'center', width:1, 
              py: 5}}>
        <CircularProgress />
        </Box></Grid> : 
      <Grid size={10}>
          <Typography align='center' variant='h6' sx={{pb: 3}}>{categoryName()}</Typography>
          <Grid container spacing={5}>
            {filteredProducts().map(p => <ProductCard key={p.$id} size={4} product={p}/>)}
          </Grid>
      </Grid>}

    </Grid>
    <Footer />
    </>
  )
}

export default  Collection