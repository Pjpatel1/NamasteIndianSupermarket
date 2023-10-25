import React from 'react'
import ProductCard from '../ProductCard';
import "./All_Items.css"

function All_Items() {
  return (
    <div className='ProductGrid'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default All_Items