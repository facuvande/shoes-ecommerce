import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) =>{
    // Listar
    return (
        <div className='box-container'>
            { products.map(prod => <Item key={prod.id} {...prod}/>) }
        </div>
        
    )
}

export default ItemList