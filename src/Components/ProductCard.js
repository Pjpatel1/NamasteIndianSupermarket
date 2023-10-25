import React from 'react'
import "./ProductCard.css"
import Sweets from "../Images/Sweets.jpeg"
import { Link } from 'react-router-dom'
function ProductCard() {
  return (
    <div className='ProductCards'>
        <div className='ProductCard'>
            <div className='ProductImage'>
                <img className="ProImage"src={Sweets}/>
            </div>
            <div  className="ProductPrice">
                Price: 35$
            </div>
            <div className='ProductDetailsbtn'>
                <Link to="../ProductDetail">
                    <button className='VDbtn'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard