import { useState, createContext } from "react"
import swal from 'sweetalert'

const Notification = ({message, severity}) =>{

    const mostrarAlerta=()=>{
        swal({
            title: severity === 'success' ? "Gracias :D" : "Que pena :C",
            text: message,
            icon: severity,
            button: "Aceptar"
        })
    }

    if(message === '') return

    return(
        <div>
            {mostrarAlerta()}
        </div>
    )
}

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) =>{
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    // severity, error info etc, message = mensaje
    const setNotification = (severity, message) =>{
        setSeverity(severity)
        setMessage(message)

        setTimeout(() =>{
            setMessage('')
        },2000)
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification severity={severity} message={message}/>
                {children}
        </NotificationContext.Provider>
    )
}
