import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal]= useState(0)
  
 
useEffect(()=>{
  const getTotal = () => {
    let accu = 0

    cart.forEach(prod => {
        accu += prod.count * prod.price  
    })

    return accu
}
  const total = getTotal()
  setTotal(total)
},[cart])
  
  
  
  // sincroniza la cantidad de productos en el cartWidget
  useEffect(() => {
    const getQuantity = () => {
        let accu = 0
    
        cart.forEach(prod => {
            accu += prod.count
        })
    
        return accu
    }
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
}, [cart]);


// función para agregar un producto al carrito(no acepta duplicados y lo setea a la nueva cantidad)

  const addItem= (productToAdd) => {
        if (!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd]);
        } else {
            setCart(
                cart.map((prod) => {
                    return prod.id === productToAdd.id
                        ? { ...prod, count: productToAdd.count }
                        : prod;
                })
            );
        }
    }

      // función que devuelva true o false si hay un producto que esté en el carrito
const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
};



  // función para remover un producto del carrito
const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutProduct);
};


// función para limpiar el carrito
const clearCart = () => {
    setCart([]);
};

// funcion para que cuando vuelva a comprar el mismo producto que ya habia agregado al carrito el contador inicia restando la cantidad que ya esta en el carrito

const getProductQuantity = (id)=>{
    const product= cart.find(prod=> prod.id === id )

    return product?.count
}


return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart,totalQuantity,total,getProductQuantity}}>
        {children}
    </CartContext.Provider>
    );
};

export default CartProvider;