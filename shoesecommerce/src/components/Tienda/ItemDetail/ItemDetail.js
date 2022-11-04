import ItemCounter from '../Counter/ItemCount'
import { useState, useContext } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { NotificationContext } from '../../../notification/NotificationService'


const ItemDetail = ({id, img, nombre, stock, descprecio, precio, descripcion}) =>{

    const [goToCart, setgoToCart] = useState(false) 
    const {addItem, getProductQuantity} = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)
    
    const handleOnAdd = (quantity) =>{
        const productToAdd = {
            id, nombre, precio, quantity, stock
        }
        
        setgoToCart(true)

        addItem(productToAdd)
        setNotification('success', `El producto ${nombre} cantidad: ${quantity} se agrego correctamente`)
    }

    const countAdded = getProductQuantity(id)

    return(
        <div className="dataInfoContainer">
            <img src={img} alt={nombre}/>
            <div className='dataDataContainer'>            
            <h2>{nombre}</h2>
            <p className='price'>${descprecio} <span>${precio}</span></p>
            <p className='descripcion'>{descripcion}</p>
            {goToCart ? <Link to={'/cart'} className='terminarCompra'>Ir al carrito</Link> : <ItemCounter onAdd={handleOnAdd} stock={stock} initial={countAdded}/>}
            </div>
        </div>
    )
}

export default ItemDetail