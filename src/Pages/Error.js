import { Link } from 'react-router-dom'

const Error = () => {
  return <div>
    <h2>404</h2>
    <p>Stránka nenalezena</p>
    <p><Link to='/'>Úvodní strana</Link></p>
  </div>
}

export default Error