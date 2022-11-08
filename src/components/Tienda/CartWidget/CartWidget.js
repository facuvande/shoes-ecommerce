import './CartWidget.css'
import cart from './assets/cartImg.png'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
const CartWidget = () =>{

    const{totalQuantity} = useContext(CartContext)

    return (
        <div className='CartWidgetContainer'>
            <Link to={"tienda/cart"}><img src={cart} alt='carrito' className='CartWidgetImg'/></Link>
            <span className='count'>{totalQuantity}</span>
        </div>
    )
}

export default CartWidget