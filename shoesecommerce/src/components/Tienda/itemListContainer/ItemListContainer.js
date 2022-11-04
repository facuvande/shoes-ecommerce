import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import { NotificationContext } from '../../../notification/NotificationService'

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {setNotification} = useContext(NotificationContext)
    const {categoryId} = useParams()

    // Vos react vas a usar useEffect unicamente despues que montes el componente
    useEffect(() =>{
    
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // Si se resuelve correctamente
        asyncFunction(categoryId).then(response =>{
            console.log(response)
            setProducts(response)
        }).catch(error => {
            setNotification('error','Hay problemas para obtener los productos')
        }).finally(() =>{
            setLoading(false);
        })

        // Funcion que queda guardada en memoria, cuando detecta que hay un desmontaje ejecuta la funcion, si nunca ocurre el desmontaje no se ejecuta la funcion
        return () => console.log('Funcion de clean up (desmonto itemListContainer)')
    }, [categoryId])

    // const productsMapped = products.map(prod => <li>{prod.nombre}</li>)

    if(loading){
        return (<div className="orbit"></div>)
    }

    return (
        <section className='products'>
            <h1 className='headerTitle'>Listado de <span>PRODUCTOS</span></h1>
            <div className='categories'>
                <p>Filtros: </p>
                <NavLink to={'/tienda/category/nuevo'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nuevo</NavLink>
                <NavLink to={'/tienda/category/usado'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Usado</NavLink>
                <NavLink to={'/tienda'} className={'Option'}>Quitar Filtros</NavLink>
            </div>
            <ItemList products={products}/>
            
        </section>
    )
}

// const ItemListContainer = ({ greeting }) =>{
//     return <p className='greeting'>{greeting}</p>
// }

export default ItemListContainer