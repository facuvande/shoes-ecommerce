import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Hola, bienvenido a la pagina.'}/>
    </div>
  );
}

export default App;
