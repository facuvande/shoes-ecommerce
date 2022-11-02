import {useState, useEffect} from 'react'
import { getProductById } from '../../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState(false)
    const {productId} = useParams()

    useEffect(() =>{
        getProductById(productId).then(response =>{
            setProduct(response)
        }).finally(() =>{
            setLoad(true)
        })
    }, [productId]);

    if(!load){
        return(<p>Cargando...</p>)
    }

    return(
        <div className='dataContainer'>
            <ItemDetail key={product.id} {...product}/>
        </div>
    )
}

export default ItemDetailContainer