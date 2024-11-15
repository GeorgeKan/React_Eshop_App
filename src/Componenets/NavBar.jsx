import { AppBar, Badge, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import {useNavigate} from 'react-router-dom'
import DiamondIcon from '@mui/icons-material/Diamond';
import HomeIcon from '@mui/icons-material/Home';
import RedeemIcon from '@mui/icons-material/Redeem';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const NavBar = () => {
    const navigate = useNavigate()

  return (
    <AppBar position="static" sx={{backgroundColor: '#719BA9'}}>
        <Toolbar>
        <Stack direction={'row'} sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            <IconButton size="large" edge="start" color="inherit" onClick={() => navigate('/')}>
                <DiamondIcon />
            </IconButton>
            <Typography variant="h6" component='div' sx={{cursor: 'pointer'}} onClick={() => navigate('/')}>Fashion Eshop</Typography>
            </Stack>
            <Stack direction={'row'} spacing={2} sx={{ alignItems: 'center', justifyContent: 'center'}}>
            <Button color="inherit" startIcon={<HomeIcon />} onClick={() => navigate('/')}>Home</Button>
            <Button color="inherit" startIcon={<RedeemIcon />} onClick={() => navigate('/collection')}>Collection</Button>
                <Button color="inherit" startIcon={<AlternateEmailIcon />} onClick={() => navigate('/contact')}>Contact</Button>
            <IconButton size="large" edge="start" color="inherit" onClick={() => navigate('/login')}>
                <PersonOutlineIcon />
            </IconButton>
            <Badge badgeContent={4} color="inherit">
            <IconButton size="small" edge="start" color="inherit" onClick={() => navigate('/cart')}>
                <ShoppingBasketIcon size='large' />
                    </IconButton>
            </Badge>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar