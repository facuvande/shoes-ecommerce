import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id,img, nombre, precio, descprecio}) =>{

    const RANKING = `★★★★★☆☆☆☆☆`

    function getRanking(ranking){
        return RANKING.slice(5 - ranking, 10 - ranking)
    }
    

    return (
        <div className="box" key={id}>
            <img src={img} alt={nombre}/>
            <div className="content">
                <h2>{nombre}</h2>
                <h3 className='price'>${descprecio} <span>${precio}</span></h3>
                <p className='estrellas'>{getRanking(4)}</p>
                <Link to ={`/detail/${id}`} className='verDetalle'>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item