import ItemCounter from '../Counter/ItemCount'
import { useState, useContext } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { NotificationContext } from '../../../notification/NotificationService'


const ItemDetail = ({id, img, name, stock, precio, price, description}) =>{

    const [goToCart, setgoToCart] = useState(false) 
    const {addItem, getProductQuantity} = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)
    
    const handleOnAdd = (count) =>{
        const productToAdd = {
            id, name, price, count, stock
        }
        addItem(productToAdd)
        setNotification('success', `El producto se agrego correctamente`)
        setgoToCart(true)
    }

    const countAdded = getProductQuantity(id)

    return(
        <div className="dataInfoContainer">
            <img src={img} alt={name}/>
            <div className='dataDataContainer'>            
            <h2>{name}</h2>
            <p className='price'>${precio} <span>${price}</span></p>
            <p className='descripcion'>{description}</p>
            {goToCart ? <Link to={'/tienda/cart'} className='terminarCompra'>Ir al carrito</Link> : <ItemCounter onAdd={handleOnAdd} stock={stock} initial={countAdded}/>}
            </div>
        </div>
    )
}

export default ItemDetail