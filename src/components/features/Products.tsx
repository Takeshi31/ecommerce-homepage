import { useEffect, useState } from 'react'

import { getAllProducts } from '../../services/api'
import { IProduct } from '../../interfaces/product.interface'
import Carousel from './Carousel'
import './products.scss'

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    (async () => { 
      const productsData = await getAllProducts()
      setProducts(productsData)
    })()
  }, [])

  return (
    <div>
      <h2>Discover our planet-friendly offer</h2>
      {
        products.length && <Carousel images={products}></Carousel>
      }
    </div>
  )
}

export default Products
