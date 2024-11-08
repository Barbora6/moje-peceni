import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Babovky from'./Pages/Babovky'
import Muffiny from './Pages/Muffiny'
import Cookies from './Pages/Cookies'
import Home from './Pages/Home'
import Error from './Pages/Error'
import SharedLayout from './Pages/SharedLayout'


const App = () => {

  return <BrowserRouter>
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
}

export default App