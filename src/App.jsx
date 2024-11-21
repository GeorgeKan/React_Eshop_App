import {useEffect} from 'react'
import { Stack } from "@mui/material"
import {useProductsStore} from './store/store'
import NavBar from "./Componenets/NavBar"
import CategoriesBanner from './Componenets/CategoriesBanner'
import MostPopular from "./Componenets/MostPopular"
import Footer from './Componenets/Footer'
import Policies from "./Componenets/Policies"

function App() {

  const { products, categories, getProducts } = useProductsStore();

  useEffect(() => {
    if (products.length == 0 || categories.length == 0) {
      getProducts();
    }
  }, []);


  return (
    <>
    <NavBar />
    <Stack sx={{mx: 5, my: 2}}>
      <img src='/banner.jpeg' width='90%'  style={{ margin: 'auto'}} />
      <CategoriesBanner />
      <MostPopular />
      <Policies />
    </Stack>
    <Footer />
    </>
  )
}

export default App
