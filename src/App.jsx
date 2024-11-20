import { Stack } from "@mui/material"
import NavBar from "./Componenets/NavBar"
import CategoriesBanner from './Componenets/CategoriesBanner'
import MostPopular from "./Componenets/MostPopular"
import Footer from './Componenets/Footer'
import Policies from "./Componenets/Policies"

function App() {
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
