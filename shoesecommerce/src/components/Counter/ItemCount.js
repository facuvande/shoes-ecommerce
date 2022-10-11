import './ItemCount.css'
import {useState} from 'react';

const ItemCount = ( {onAdd, stock} ) =>{

    const[number, setNumber] = useState(0)

    const decrementar = () =>{
        if(number>0){
            setNumber(number - 1);
        }
    }

    const incrementar = () =>{
        if(number<stock){
            setNumber(number + 1);
        }
    }

    return(
        <div className='counterItemsContainer'>
            <div className='counterContainer'>
                <button id="decrementar" className='button' onClick={decrementar}>-</button>
                <input type={"number"} id={"mi-input"} value={number} readOnly></input>
                <button id="incrementar" className='button' onClick={incrementar}>+</button>
            </div>
            <div>
                <button onClick={onAdd} className="AgregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount