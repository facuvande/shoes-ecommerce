import {useState, useEffect} from 'react'
// import { getProductById } from '../../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
// doc hace referencia a un documento
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../services/firebase';
import './ItemDetailContainer.css'


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState(false)
    const {productId} = useParams()

    useEffect(() =>{
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response =>{
            console.log(response)

            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        }).finally(() =>{
            setLoad(true)
        })

        // getProductById(productId).then(response =>{
        //     setProduct(response)
        // }).finally(() =>{
        //     setLoad(true)
        // })
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