import {TextField, Stack, Typography, Select, MenuItem} from '@mui/material'

const CreditCard = () => {
  return (
    <Stack direction={'column'} sx={{mt: 4, mb: 3}}>
        <Typography variant='h6' sx={{fontWeight: '500', ml: 1}}>CREDIT CARD INFO</Typography>
        <TextField type='text' size="small" label='Card Number' sx={{my: 1}} />
        <Typography variant='body1' sx={{ml: 1, mb: 1}}>Expiration Date</Typography>
        <Stack direction={'row'} sx={{gap: 1, alignItems: 'center'}}>
        <TextField type="number" size='small' value={'08'} label='Month' />
        <TextField type="number" size='small' value={'2026'} label='Year' />
        <TextField type="text" size='small' label='CCV' />
        </Stack>
        <TextField type='text' size="small" label='Owner Name' sx={{mt: 2}} />
    </Stack>
  )
}

export default CreditCard