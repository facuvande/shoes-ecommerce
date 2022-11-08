import CardsItem from '../CardsItem/CardsItem'
import { products } from '../CardsContainer/CardsMock'
import { useState, useEffect } from 'react'
import './CardsContainer.css'

const CardsContainer = () =>{
    const [ Card, setCard] = useState([]);

    useEffect(() =>{
        
        // Si se resuelve correctamente
        products().then(response =>{
            setCard(response)
        })
    }, [])

    return(
        <section className='CardsContainer'>
            <h2 className='title'>Nuestros servicios</h2>
            <CardsItem cards={Card}/>
        </section>
    )
}

export default CardsContainer