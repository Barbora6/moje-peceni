import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <header>
    <nav>
      <Link to='/'>Domů</Link>
      <Link to='/babovky'>Bábovky</Link>
      <Link to='/muffiny'>Muffiny</Link>
      <Link to='/cookies'>Vánoční cukroví</Link>
    </nav>
  </header>
}

export default Navbar