import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Babovky from'./pages/babovky/Babovky'
import Muffiny from './pages/muffins/Muffiny'
import Cookies from './pages/cookies/Cookies'
import Home from './pages/home/Home'
import Error from './pages/Error'
import SharedLayout from './components/layout/SharedLayout'


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