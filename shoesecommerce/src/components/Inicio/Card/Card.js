import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({id, img, title, subtitle}) =>{

    return(
        <div key={id} className='Card'>
            <img src={img} alt={title}></img>
            <div className='CardContent'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Link to={'/tienda'} className={"ButtonCard"}>Tienda</Link>
            </div>
        </div>
    )
}

export default Card