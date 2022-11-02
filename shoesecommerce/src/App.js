import React from 'react'
import './App.css'
import { useState, createContext } from 'react'
import Navbar from './components/Tienda/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio'
import ItemListContainer from './components/Tienda/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Tienda/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export const MyContext = createContext() // Retorna componente provider, si tenemos un array iniciamos con array y compartimos array , sino se rompe y kaboom tu app 

function App() {
  const[cart, setCart] = useState([])
  console.log(cart)

  const addItem = (productToAdd) =>{
    if(!isInCart(productToAdd.id)){
      setCart([...cart, productToAdd])
    }else{
      console.log("Ya esta en el carrito")
    }
  }

  const isInCart = (id) =>{
    // .some si se cumple retorna true , si no se cumple retorna false
    return cart.some(prod => prod.id === id);
  }

  return (
    <div className="App">
      <MyContext.Provider value={{cart, addItem}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/tienda' element={<ItemListContainer/>}></Route>
            <Route path='/tienda/category/:categoryId' element={<ItemListContainer/ >}></Route>
            <Route path='/tienda/detail/:productId' element={<ItemDetailContainer />}></Route>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
