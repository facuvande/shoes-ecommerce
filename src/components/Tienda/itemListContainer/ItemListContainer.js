import { useState, useEffect } from 'react'
//import { getProducts, getProductsByCategory } from '../../../asyncMock'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import { NotificationContext } from '../../../notification/NotificationService'
// getDocs trae todos los documentos de la firebase, query (vos tenes q ir a esta db , a esta coleccion y tenes que aplicar este filtro...) y where (condicion) son para el filtrado por categoria
import { getDocs, collection, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../../services/firebase/index'

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([])
    const {setNotification} = useContext(NotificationContext)
    const {categoryId} = useParams()

    useEffect(() =>{
        const collectionRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(collectionRef).then(response=>{
            console.log(response)
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                return {id, ...data}
            })
            setCategories(categoriesAdapted)
        })
    },[])

    // Vos react vas a usar useEffect unicamente despues que montes el componente
    useEffect(() =>{
    
        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        // Si se resuelve correctamente
        getDocs(collectionRef).then(response =>{
            console.log(response)
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                console.log(data)

                // El id esta un nivel mas arriba que data entonces no lo traeria, con el return este lo juntamos
                return { id: doc.id, ...data}
            })
            console.log(productsAdapted)
            setProducts(productsAdapted)
        }).catch(error => {
            setNotification('error','Hay problemas para obtener los productos')
        }).finally(() =>{
            setLoading(false);
        })


        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // // Si se resuelve correctamente
        // asyncFunction(categoryId).then(response =>{
        //     setProducts(response)
        // }).catch(error => {
        //     setNotification('error','Hay problemas para obtener los productos')
        // }).finally(() =>{
        //     setLoading(false);
        // })

        // Funcion que queda guardada en memoria, cuando detecta que hay un desmontaje ejecuta la funcion, si nunca ocurre el desmontaje no se ejecuta la funcion
        // return () => console.log('Funcion de clean up (desmonto itemListContainer)')
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
                {
                    categories.map(cat =>(
                        <NavLink key={cat.id} to={`/tienda/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                    ))
                }
                <NavLink to={'/tienda'} className={'Option'}>Quitar Filtros</NavLink>
                {/* <NavLink to={'/tienda/category/nuevo'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nuevo</NavLink>
                <NavLink to={'/tienda/category/usado'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Usado</NavLink>
                <NavLink to={'/tienda'} className={'Option'}>Quitar Filtros</NavLink> */}
            </div>
            <ItemList products={products}/>
            
        </section>
    )
}

export default ItemListContainer