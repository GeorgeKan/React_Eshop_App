import { Divider, Paper, Stack, Typography } from "@mui/material"
import {useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid2';
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

const CategoriesBanner = () => {
    const navigate = useNavigate()
  return (
    <>
    <Divider sx={{mt: 3}} />
    <Typography variant="h4" component={'div'} sx={{mx: 'auto', my: 3}} color='#00695c'>Product Categories</Typography>
    <Grid container spacing={2}>
        <Grid size={2} offset={1}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/beauty')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <PiEyedropperFill style={{marginBottom: 16, fontSize: 30, color: '#00897b'}} />
            <Typography variant="h6" align="center" color="#009688">Cosmetics</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/fragrances')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <GiDelicatePerfume style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Fragrances</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/womens-jewellery')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <GiBigDiamondRing style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Womens Jewellery</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/womens-dresses')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <PiDressFill style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Womens Dresses</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/womens-watches')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <FiWatch style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Womens Watches</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2} offset={1}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/womens-bags')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <FaShoppingBag style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Womens Bags</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/womens-shoes')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <GiWalkingBoot style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Womens Shoes</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/mens-shirts')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <PiShirtFoldedFill style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Mens Shirts</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/mens-watches')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <MdWatch style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Mens Watches</Typography>
            </Stack>
        </Paper>
        </Grid>
        <Grid size={2}>
        <Paper elevation={5} sx={{p: 5, cursor: 'pointer'}} square onClick={() => navigate('/collection/mens-shoes')}>
            <Stack direction={'column'} sx={{alignItems: 'center'}}>
            <GiSteeltoeBoots style={{marginBottom: 16, fontSize: 30, color: '#00897b'}}/>
            <Typography variant="h6" align="center" color="#009688">Mens Shoes</Typography>
            </Stack>
        </Paper>
        </Grid>
        </Grid>
    </>
  )
}

export default CategoriesBanner