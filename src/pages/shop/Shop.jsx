import React from 'react'
import { PRODUCTS } from '../../Products'
import ProductItem from './ProductItem'
import './Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>BrandTops Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((productItem) => {
          return (
            <ProductItem data={productItem} />
          )
        })}
      </div>
    </div>
  )
}

export default Shop