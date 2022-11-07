import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id,img, name, price, precio}) =>{
    const RANKING = `★★★★★☆☆☆☆☆`

    function getRanking(ranking){
        return RANKING.slice(5 - ranking, 10 - ranking)
    }
    // Desestructura para usar solo addItem y no el cart, si quisiera desestructurar por posicion se usaria []


    return (
        <div className="box" key={id}>
            <img src={img} alt={name}/>
            <div className="content">
                <h2>{name}</h2>
                <h3 className='price'>${precio} <span>${price}</span></h3>
                <p className='estrellas'>{getRanking(4)}</p>
                <Link to ={`/tienda/detail/${id}`} className='verDetalle'>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item