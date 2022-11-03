import { createContext, useState, useEffect } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
}) // Retorna componente provider, si tenemos un array iniciamos con array y compartimos array , sino se rompe y kaboom tu app

export const CartProvider = ({children}) =>{
    const[cart, setCart] = useState([])
    const[totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)

    // Ejecuta el setQuantity unicamente si nos cambia el cart
    useEffect(() =>{
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
            // Metodo map para actualizar cantidad
            setCart([...cart, productToAdd])
        }else{
            console.log("Ya esta en el carrito")
        }
    }

    const isInCart = (id) =>{
      // .some si se cumple retorna true , si no se cumple retorna false
        return cart.some(prod => prod.id === id);
    }

    const removeItem = (id) =>{
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () =>{
        let accu = 0;
        
        cart.forEach(prod =>{
            accu+= prod.quantity
        })
        return accu
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity}}>
            {children}
        </CartContext.Provider>

    )
}