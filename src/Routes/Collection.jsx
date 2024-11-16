import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'
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
import NavBar from '../Componenets/NavBar'
import Footer from '../Componenets/Footer'
import ProductCard from '../Componenets/ProductCard'

const  Collection = () => {
  const {id} = useParams()

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
            <ListItemText primary='Cosmetics' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiDelicatePerfume /></ListItemIcon>
            <ListItemText primary='Fragrances' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiBigDiamondRing /></ListItemIcon>
            <ListItemText primary='Womens Jewellery' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><PiDressFill /></ListItemIcon>
            <ListItemText primary='Womens Dresses' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><FiWatch /></ListItemIcon>
            <ListItemText primary='Womens Watches' />
          </ListItemButton>
          </ListItem>

          <ListItem>
          <ListItemButton>
            <ListItemIcon><FaShoppingBag /></ListItemIcon>
            <ListItemText primary='Womens Bags' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiWalkingBoot /></ListItemIcon>
            <ListItemText primary='Womens Shoes' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><PiShirtFoldedFill /></ListItemIcon>
            <ListItemText primary='Mens Shirts' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><MdWatch /></ListItemIcon>
            <ListItemText primary='Mens Watches' />
          </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <ListItemIcon><GiSteeltoeBoots /></ListItemIcon>
            <ListItemText primary='Mens Shoes' />
          </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <Grid size={10}>
          <Typography align='center' variant='h6' sx={{pb: 3}}>Womens Juelery</Typography>
          <Grid container spacing={5}>
          <ProductCard size={4}/>
          <ProductCard size={4}/>
          <ProductCard size={4}/>
          <ProductCard size={4}/>
          <ProductCard size={4}/>
          <ProductCard size={4}/>
          </Grid>
      </Grid>
    </Grid>
    <Footer />
    </>
  )
}

export default  Collection