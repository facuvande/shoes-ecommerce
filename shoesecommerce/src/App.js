import React from 'react'
import './App.css'
import Navbar from './components/Tienda/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio'
import ItemListContainer from './components/Tienda/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Tienda/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './context/CartContext'
import {NotificationProvider} from './notification/NotificationService'
import Cart from './components/Tienda/Cart/Cart'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/tienda' element={<ItemListContainer/>}></Route>
            <Route path='/tienda/category/:categoryId' element={<ItemListContainer/ >}></Route>
            <Route path='/tienda/detail/:productId' element={<ItemDetailContainer />}></Route>
            <Route path="/tienda/cart" element={<Cart/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
      
    </div>
  );
}

export default App;
