import './ItemDetail.css'
import ItemCounter from '../Counter/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../../../App'

const ItemDetail = ({id, img, nombre, stock, descprecio, precio, descripcion}) =>{

    const [goToCart, setgoToCart] = useState(false) 
    const {addItem} = useContext(MyContext)

    const handleOnAdd = (quantity) =>{
        setgoToCart(true)
        const productToAdd = {
            id, nombre, precio, quantity, stock
        }

        // console.log(productToAdd)
        addItem(productToAdd)
    }

    return(
        <div className="dataInfoContainer">
            <img src={img} alt={nombre}/>
            <div className='dataDataContainer'>            
            <h2>{nombre}</h2>
            <p className='price'>${descprecio} <span>${precio}</span></p>
            <p className='descripcion'>{descripcion}</p>
            {goToCart ? <Link to={'/cart'} className='terminarCompra'>Terminar Compra</Link> : <ItemCounter onAdd={handleOnAdd} stock={stock}/>}
            </div>
            
        </div>
    )
}

export default ItemDetail