import './ItemCount.css'
import {useState} from 'react';

const ItemCount = ( {onAdd, stock=0, initial = 1} ) =>{
    const [quantity, setQuantity] = useState(initial)

    const decrementar = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const incrementar = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }


    return(
        <div className='counterItemsContainer'>
            <div className='counterContainer'>
                <button id="decrementar" className='button' onClick={decrementar}>-</button>
                <input type={"number"} id={"mi-input"} value={quantity} readOnly></input>
                <button id="incrementar" className='button' onClick={incrementar}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} className="AgregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemCount