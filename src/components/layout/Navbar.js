import { Link, Stack } from '@mui/material'
import { Link as RouterLink, } from 'react-router-dom'


const Navbar = () => {
  return <header>
    <Stack direction={'row'} gap={4}> 
      <Link component={RouterLink} to='/' sx={{color:'white'}}>Domů</Link>
      <Link component={RouterLink} to='/marbleCake' sx={{color:'white'}}>Bábovky</Link>
      <Link component={RouterLink} to='/muffiny' sx={{color:'white'}}>Muffiny</Link>
      <Link component={RouterLink} to='/cookies' sx={{color:'white'}}>Vánoční cukroví</Link>
    </Stack>
  </header>
}

export default Navbar