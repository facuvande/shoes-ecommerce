import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products, setPage}) =>{
    // Listar
    return (
        <div className='box-container'>
            { products.map(prod => <Item key={prod.id} {...prod} setPage={setPage}/>) }
        </div>
        
    )
}

export default ItemList