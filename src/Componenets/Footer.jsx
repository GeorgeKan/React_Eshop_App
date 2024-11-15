import {Box, Paper, IconButton, Typography, Stack, Toolbar} from '@mui/material'
import Grid from '@mui/material/Grid2';
import DiamondIcon from '@mui/icons-material/Diamond';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Paper elevation={3} sx={{px: 3}}>
        
        <Grid container spacing={2}>
            <Grid size={4}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: 1}}>
            <Typography variant='body2'>© 2024 Fashion Eshop</Typography>
            </Box>
            </Grid>
        <Grid size={4}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <IconButton size="large" edge="start" color="inherit">
                <DiamondIcon />
            </IconButton>
            <Typography variant="h6" component='div'>Fashion Eshop</Typography>
            </Box>
        </Grid>
        <Grid size={4}>
            <Stack direction={'row'} spacing={4} sx={{alignItems: 'center', justifyContent: 'flex-end', height: 1}}>
<FacebookIcon /><XIcon /><LinkedInIcon /><InstagramIcon />
            </Stack>
        </Grid>

        </Grid>
    
    </Paper>
  )
}

export default Footer