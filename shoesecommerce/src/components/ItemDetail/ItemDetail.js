import './ItemDetail.css'
import ItemCounter from '../Counter/ItemCount'

const ItemDetail = ({img, nombre, stock, descprecio, precio, descripcion}) =>{

    const handleOnAdd = () =>{
        console.log(`Se hizo click en agregar al carrito`);
    }

    return(
        <div className="dataInfoContainer">
            <img src={img} alt={nombre}/>
            <div className='dataDataContainer'>            
            <h2>{nombre}</h2>
            <p className='price'>${descprecio} <span>${precio}</span></p>
            <p className='descripcion'>{descripcion}</p>
            <ItemCounter onAdd={handleOnAdd} stock={stock}/>
            </div>
            
        </div>
    )
}

export default ItemDetail