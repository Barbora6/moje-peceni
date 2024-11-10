import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Babovky from'./pages/marbleCake/MarbleCake'
import Muffiny from './pages/muffins/Muffiny'
import Cookies from './pages/cookies/Cookies'
import Home from './pages/home/Home'
import Error from './pages/Error'
import SharedLayout from './components/layout/SharedLayout'
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {

  return <>
  <CssBaseline />
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/> }/>
        <Route path='/babovky' element={<Babovky/>}/>
        <Route path='/muffiny' element={<Muffiny/>}/>
        <Route path='/cookies' element={<Cookies/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

  </>
  

}

export default App