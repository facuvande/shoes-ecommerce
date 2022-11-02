import './CartWidget.css'
import cart from './assets/cartImg.png'

const CartWidget = () =>{

    return (
        <div className='CartWidgetContainer'>
            <img src={cart} alt='carrito' className='CartWidgetImg'/>
            <span className='count'>{0}</span>
        </div>
    )
}

export default CartWidget