import React from 'react'
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

const Cart = () =>{
    const navigate = useNavigate()
    const {cart, removeItem, total, clearCart, totalQuantity } = useContext(CartContext)

    if(cart.length === 0){
        return(
            <div>
                <h1>El carrito se encuentra Vacio.</h1>
                <Link to={'/Tienda'}><h6>Volver a la Tienda</h6></Link>
            </div>
        )
    }

    
return ( 
    <div className='cartContainer'>
        <h3>Carrito</h3>
        <p>Actualmente tenes {totalQuantity} productos en el carrito</p>
        {cart.map(prod=>( 
            <table className="table table-dark mt-5" key={prod.id}>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio por unidad</th>
                        <th>Subtotal</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{prod.nombre}</td>
                        <td>{prod.count}</td>
                        <td>${prod.precio}</td>
                        <td>${prod.count * prod.precio}</td>
                        <td><button type="button" className="btn-delete" onClick={()=> removeItem(prod.id)}>X</button></td>
                    </tr>
                </tbody>
            </table>

            ))
        }
        <h2>Precio Total: $ {total}</h2>
        
        <div className='btn-container'>
        <Link to='/checkout'><button type="button" className="">Continuar Compra</button></Link>
        <button type="button" className="" onClick={()=> clearCart()}>Limpiar Carrito</button>
        <button className="btn-back" onClick={() => navigate(-1)}>Volver Atras</button>
        
        </div>
        

        </div> 
        
    
    
 );
}

export default Cart