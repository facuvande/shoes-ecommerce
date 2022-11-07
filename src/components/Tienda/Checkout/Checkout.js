import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
// import { addDoc, collection } from 'firebase/firestore'
import { updateDoc, doc, collection, getDocs, query, where, documentId, writeBatch, addDoc} from 'firebase/firestore'
import { db } from '../../../services/firebase/index'
import { NotificationContext } from '../../../notification/NotificationService'
import { isCompositeComponent } from 'react-dom/test-utils'

const Checkout = () =>{

    const { cart, total } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const createOrder = async () =>{
        try{
            const objOrder = {
                buyer: {
                    name: 'Sebastian Zuviria',
                    phone: '1234567',
                    email: 'contact@asd.com',
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            
            const productsRef = collection(db, 'products')
            
            const productsAddedFromFirestore= await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
        
            if(outOfStock.length === 0 ){
                await batch.commit()
                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setNotification('sucess',`El id de su orden es: ${orderAdded.id}`)
            }else{
                setNotification('error', 'Hay productos que estan fuera de stock :C')
            }
        } catch(error){
            console.log(error)
        }
    }


    return (
        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default Checkout