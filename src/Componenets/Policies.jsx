import { Divider, Typography, Stack } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { RiExchangeLine } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Policies = () => {
  return (
    <>
    <Divider sx={{my: 5}} />
    <Grid container spacing={2}>
        <Grid size={4}>
        <Stack direction={'column'} sx={{alignItems: 'center', my: 5}}>
            <RiExchangeLine style={{fontSize: 50, marginBottom: 20}}/>
            <Typography variant="h6">Easy Exchange Policy</Typography>
            </Stack>
        </Grid>
        <Grid size={4}>
        <Stack direction={'column'} sx={{alignItems: 'center', my: 5}}>
            <BsPatchCheck style={{fontSize: 50, marginBottom: 20}}/>
            <Typography variant="h6">7 Days Return Policy</Typography>
            </Stack>
        </Grid>
        <Grid size={4}>
        <Stack direction={'column'} sx={{alignItems: 'center', my: 5}}>
            <BiSupport style={{fontSize: 50, marginBottom: 20}}/>
            <Typography variant="h6">Best customer support</Typography>
            </Stack>
        </Grid>
    </Grid>
    </>
  )
}

export default Policies