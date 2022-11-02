import Card from '../Card/Card'
import './CardsItem.css'

const CardsItem = ({cards, setPage}) =>{

    return(
        <div className='CardsItem'>
            { cards.map(prod => <Card key={prod.id} {...prod} setPage={setPage}/>) }
        </div>
    )
}

export default CardsItem