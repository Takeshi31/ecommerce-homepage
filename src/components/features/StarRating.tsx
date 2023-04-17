import { Prices } from '../../interfaces/product.interface'
import './starRating.scss'

const StarRating = ({ tags, prices }: { tags: string[], prices: Prices}) => {

  const numbers: number[] = tags.filter(tag => !isNaN(Number(tag))).map(Number)
  const sum: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  const average: number = sum / numbers.length

  let rating: number = Math.floor(average / 100) + 1

  return (
    <div className='rating-line'>
      <div>
        <div className={'start'}>
          {[...Array(rating)].map((_, index) => (
            <span key={index} className={'start-color'}>&#9733;</span>
          ))}
        </div>
        <div className={'average'}>({average})</div>
      </div>
      <div>
        <span className={'text-line-through'}>€{prices.max.amount}</span>
        <span className={'sale-price'}>€{prices.min.amount}</span>
      </div>
    </div>
  )
}

export default StarRating
