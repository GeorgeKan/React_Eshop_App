import {useState} from 'react';
import {TextField, Stack, Typography, Select, MenuItem} from '@mui/material'

const CreditCard = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  return (
    <Stack direction={'column'} sx={{mt: 4, mb: 3}}>
        <Typography variant='h6' sx={{fontWeight: '500', ml: 1}}>CREDIT CARD INFO</Typography>
        <TextField type='text' size="small" label='Card Number' sx={{my: 1}} />
        <Typography variant='body1' sx={{ml: 1, mb: 1}}>Expiration Date</Typography>
        <Stack direction={'row'} sx={{gap: 1, alignItems: 'center'}}>
        <TextField type="number" size='small'  label='Month' value={month}
        onChange={e => setMonth(parseInt(e.target.value))} />
        <TextField type="number" size='small' label='Year' value={year} min={new Date().getFullYear()}
        max={new Date().getFullYear() + 5} onChange={e => setYear(e.target.value)} />
        <TextField type="text" size='small' label='CCV' />
        </Stack>
        <TextField type='text' size="small" label='Owner Name' sx={{mt: 2}} />
    </Stack>
  )
}

export default CreditCard