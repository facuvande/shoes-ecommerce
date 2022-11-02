import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../../../App'

const Item = ({id,img, nombre, precio, descprecio}) =>{
    const RANKING = `★★★★★☆☆☆☆☆`

    function getRanking(ranking){
        return RANKING.slice(5 - ranking, 10 - ranking)
    }
    // Desestructura para usar solo addItem y no el cart, si quisiera desestructurar por posicion se usaria []
    const { addItem }= useContext(MyContext)


    return (
        <div className="box" key={id}>
            <img src={img} alt={nombre}/>
            <div className="content">
                <h2>{nombre}</h2>
                <h3 className='price'>${descprecio} <span>${precio}</span></h3>
                <p className='estrellas'>{getRanking(4)}</p>
                <Link to ={`/tienda/detail/${id}`} className='verDetalle'>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item