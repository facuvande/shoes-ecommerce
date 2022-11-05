import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () =>{
    return (
        <div className="BannerContainer">
            <img src={"https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg"} alt={"Hola"}></img>
            <div className='position'>
                <p>Compra las mejores Zapatillas</p>
                <Link to={'/tienda'} className={"ButtonTienda"}>Tienda</Link>
            </div>
        </div>
    )
}

export default Banner