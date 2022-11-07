import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
// import { addDoc, collection } from 'firebase/firestore'
import ClientForm from '../Form/Form'
import Swal from 'sweetalert'
import { useOrdersFromFirestore } from '../../../services/firestore/Orders'

const Checkout = () => {
    const {clearCart} = useContext(CartContext)

    const [loading, setLoading] = useState(false)

    const [personalData, setPersonalData] = useState(false)
    
    const [datosCompra, setDatosCompra] = useState({}) 

    const completoDatos = (name, surname, address, phone, email) =>{
            setDatosCompra({name, surname, address, phone, email})
            setPersonalData(true)
        }    

    const navigate = useNavigate()

    const { createOrder } = useOrdersFromFirestore()

    const getOrder =()=>{    
        
        setLoading(true)

        createOrder(datosCompra).then(response => {
            if(response.result === 'orderCreated') {
                clearCart()

                Swal({
                    title: "Gracias por su compra",
                    text:`El id de su orden es: ${response.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                })
        
                navigate ('/')
            }else{
                Swal({
                    title: "Algunos productos no se encuentran en stock",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
            }  
        }).catch(error => {
            Swal({
                title:"Ha habido un error",
                icon: false,
                buttons: true,
                dangerMode: true,
            })
        }).finally(() => {
            setLoading(false)
        })
    }

    


    if(loading) {
        return <div className="conteinerCheckout">
            <h1>Se esta procesando su pedido...</h1>
        </div>
    }

    return (    
        <div>
            <h1 className="datosCliente">Completa los datos para generar la orden.</h1>
            <ClientForm completoDatos={completoDatos}/>
            { personalData 
            ?<button className="botonCheckout" onClick={getOrder}>Generar Pedido</button> 
            : ""}
        </div>
    )
}
export default Checkout