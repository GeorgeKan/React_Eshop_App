import {useState} from 'react'
import { AppBar, Badge, Button, IconButton, Stack, Toolbar, Typography, Menu, MenuItem } from "@mui/material"
import {useNavigate} from 'react-router-dom'
import DiamondIcon from '@mui/icons-material/Diamond';
import HomeIcon from '@mui/icons-material/Home';
import RedeemIcon from '@mui/icons-material/Redeem';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
    const navigate = useNavigate()
    const login = false
    
    const [ancorEl, setAnchorEl] = useState(null)
    const open = Boolean(ancorEl)

  return (
    <AppBar position="static" sx={{backgroundColor: '#719BA9'}}>
        <Toolbar>
        <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
            <IconButton size="large" edge="start" color="inherit" onClick={() => navigate('/')}>
                <DiamondIcon />
            </IconButton>
            <Typography variant="h6" component='div' sx={{cursor: 'pointer'}} onClick={() => navigate('/')}>Fashion Eshop</Typography>
            </Stack>
            <Stack direction={'row'} spacing={2} sx={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button color="inherit" startIcon={<HomeIcon />} onClick={() => navigate('/')}>Home</Button>
            <Button color="inherit" startIcon={<RedeemIcon />} onClick={() => navigate('/collection')}>Collection</Button>
            <Button color="inherit" startIcon={<InfoIcon />} onClick={() => navigate('/contact')}>About</Button>
            <Button color="inherit" startIcon={<AlternateEmailIcon />} onClick={() => navigate('/contact')}>Contact Us</Button>
            </Stack>
            <Stack direction={'row'} spacing={2} sx={{ alignItems: 'center', justifyContent: 'center'}}>
            <IconButton size="large" edge="start" color="inherit" id='user-auth-button'
            arial-control={open ? 'user-auth-menu': undefined}
            arial-haspopup='true'
            arial-expanded={open ? 'true' : undefined}
            onClick={(e) => setAnchorEl(e.currentTarget)}>
                <PersonOutlineIcon />
            </IconButton>
            <Badge badgeContent={4} color="inherit">
            <IconButton size="small" edge="start" color="inherit" onClick={() => navigate('/cart')}>
                <ShoppingBasketIcon size='large' />
                    </IconButton>
            </Badge>
            </Stack>
            {login ? <Menu id='user-auth-menu' anchorEl={ancorEl} open={open} MenuListProps={{
                'aria-labelledby': 'user-auth-button'
            }} onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            >
            <MenuItem divider onClick={() => navigate('/login')}>Login</MenuItem>
            <MenuItem onClick={() => navigate('/register')}>Register</MenuItem>    
            </Menu> : <Menu id='user-auth-menu' anchorEl={ancorEl} open={open} MenuListProps={{
                'aria-labelledby': 'user-auth-button'
            }} onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            >
            <MenuItem divider>George Kanellos</MenuItem>
            <MenuItem>Log out</MenuItem>    
            </Menu>}
        </Toolbar>
    </AppBar>
  )
}

export default NavBar