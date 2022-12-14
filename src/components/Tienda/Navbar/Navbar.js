import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='nav'>
            <h1>Shoes</h1>
            <div className='linksContainer'>
                <Link to='/' className='linksItem'>Inicio</Link>
                <Link to='/tienda' className='linksItem'>Tienda</Link>
                <button className='linksItem'>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar