import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className='nav'>
            <h1>Shoes</h1>
            <div className='linksContainer'>
                <button className='linksItem'>Inicio</button>
                <button className='linksItem'>Tienda</button>
                <button className='linksItem'>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar