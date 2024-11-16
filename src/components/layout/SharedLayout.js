import { Outlet } from 'react-router-dom'
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

export const SharedLayout = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container maxWidth='lg' disableGutters>
        <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}> MojePečení
          </Typography>
        <Navbar/>
             </Toolbar>
             </Container>
      </AppBar>
    </Box>
    <Container maxWidth='lg'>
            <Outlet/>
    </Container>
        <Footer/>  
  </>
}
