import { MouseEvent } from 'react'

import { IProduct } from '../../interfaces/product.interface'
import StarRating from './StarRating'
import './carousel.scss'

let prevAction = (leftPosition: number, cardWidth: number, imageContainer: Element) => {
  if(leftPosition > 0) {
    (imageContainer as HTMLElement).style.left = `${-(leftPosition - cardWidth)}px`
  }
}

let nextAction = (leftPosition: number, imageContainerWidth: number, listWidth: number, cardWidth: number, imageContainer: Element) => {
  if(leftPosition < (imageContainerWidth - listWidth)) {
    (imageContainer as HTMLElement).style.left = `${-(leftPosition + cardWidth)}px`
  }
}

const Carousel = ({ images }: { images: IProduct[]}) => {

  const slide = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const btn = event.currentTarget
    const slickList = event.currentTarget.parentNode

    const imageContainer = document.querySelector('.image-container')

    const card = document.querySelectorAll('.card')

    const cardWidth = card[0].clientWidth
    
    const imageContainerWidth = (imageContainer as HTMLElement).offsetWidth

    const listWidth = (slickList as HTMLElement).offsetWidth

    let leftPosition: number

    (imageContainer as HTMLElement).style.left == ''  ? leftPosition = parseInt((imageContainer as HTMLElement).style.left = '0') : leftPosition = parseFloat((parseInt((imageContainer as HTMLElement).style.left.slice(0, -2)) * -1).toString())

    btn.dataset.button == 'button-prev' ? prevAction(leftPosition, cardWidth, imageContainer!) : nextAction(leftPosition, imageContainerWidth, listWidth, cardWidth, imageContainer!)
  }

  return (
    <div className='carousel'>  
      <div className='carousel-list'>
        <button className='slick-arrow slick-prev' id='button-prev' data-button='button-prev' onClick={(event) => slide(event)}>
          <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-left' className='svg-inline--fa fa-chevron-left fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path fill='currentColor' d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path></svg>
        </button>
        <div className='image-container' id='container'>
          {images.map((image, i) => (
            <div key={i} className={'card'}>
              <div>
                <button className={'btn-secondary-inverse'}><span className={'text-button'}>Hola</span></button>
                <picture>
                  <img src={`${image.featuredImage.url}`} alt={image.title} />
                </picture>
                <div className={'image-title'}>{image.title}</div>
                <StarRating tags={image.tags} prices={image.prices}></StarRating>
              </div>
            </div>
          ))}
        </div>
        <button className='slick-arrow slick-next' id='button-next' data-button='button-next' onClick={(event) => slide(event)}>
            <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-right' className='svg-inline--fa fa-chevron-right fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path fill='currentColor' d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
