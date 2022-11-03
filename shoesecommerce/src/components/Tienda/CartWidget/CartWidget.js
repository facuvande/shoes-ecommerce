import './CartWidget.css'
import cart from './assets/cartImg.png'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () =>{

    const{totalQuantity} = useContext(CartContext)

    return (
        <div className='CartWidgetContainer'>
            <img src={cart} alt='carrito' className='CartWidgetImg'/>
            <span className='count'>{totalQuantity}</span>
        </div>
    )
}

export default CartWidget