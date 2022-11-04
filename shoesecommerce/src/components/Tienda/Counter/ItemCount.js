import './ItemCount.css'
import {useState} from 'react';

const ItemCount = ( {stock, initial = 1, onAdd} ) =>{
    const [count, setCount] = useState(initial)

    const incrementar = ()=> {
        if (count < stock){
          setCount(count + 1);
        }
      }
      const decrementar = ()=> {
        if (count > 1){
          setCount(count - 1);
        }
      }


    return(
        <div className='counterItemsContainer'>
            <div className='counterContainer'>
                <button id="decrementar" className='button' onClick={decrementar}>-</button>
                <input type={"number"} id={"mi-input"} value={count} readOnly></input>
                <button id="incrementar" className='button' onClick={incrementar}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count)} className="AgregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemCount