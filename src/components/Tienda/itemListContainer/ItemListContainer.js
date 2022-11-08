import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import { NotificationContext } from '../../../notification/NotificationService'
import { getDocs, collection, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../../services/firebase/index'
import { createAdaptedProductFromFirestore } from '../../../adapter/productAdapter'

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
            const productsAdapted = response.docs.map(doc =>{
                return createAdaptedProductFromFirestore(doc)
            })
            setProducts(productsAdapted)
        }).catch(error => {
            setNotification('error','Hay problemas para obtener los productos')
        }).finally(() =>{
            setLoading(false);
        })

    }, [categoryId])


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
            </div>
            <ItemList products={products}/>
            
        </section>
    )
}

export default ItemListContainer