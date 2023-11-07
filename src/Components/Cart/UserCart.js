import  {React, useEffect, useState } from 'react';
import axios from 'axios';
import {useUser} from '../Auth/UserContext';
import "../Cart/Cart.css"
import Deep from '../../Images/Drinks.jpeg'
import QuantityInput from '../mui/mui';

function UserCart() {
    const [cartItems, setCartItems] = useState([]);
    const {user} = useUser();

    useEffect(() => {
        // Make a GET request to fetch the user's cart items
        axios.get(`https://sampleserver-96f7c60072ed.herokuapp.com/cart/get-cart/${user.userId}`)
          .then((response) => {
            setCartItems(response.data);
            console.log(cartItems);
            cartItems.map((cartItems)=>{
                console.log(cartItems._id);
                console.log(cartItems.productId.Brand)
                console.log(cartItems.productId.Quantity)
                console.log(cartItems.totalAmount)
            })
          })
          .catch((error) => {
            console.error('Error fetching cart:', error);
          });
      }, [user.userId]);
    
  return (
    <div>
        <div className='CartPage'>
            Your Cart
            {cartItems.map((cartItem)=>(
              <div key = {cartItem.Id} className='CartProduct'>
                  <div className='ProductImageCover'>
                    <img className="ProImage"src={cartItem.productId.ProductImage1}/>
                  </div>
                  <div className='CartProductDetails'>
                    <div className='CartProductName'>
                        {cartItem.productId.Name}
                    </div>
                    <div className='CartPrice'>
                      Price: {cartItem.productId.Price}
                    </div>
                    <div>

                    </div>
                  </div>
                  <div className='FreeSpace'>
                  </div>
                  <div className='PayableAmount'>
                      {cartItem.totalAmount}
                  </div>
                  
              </div>
            ))}
            </div>
            
    </div>
  )
}

export default UserCart;
// {cartItems.map((cartItem)=>(
//   <div key = {cartItem.Id} className='CartProduct'>
//       <div className='ProductImageCover'>
//           <img className='ProductImage' src={Deep}></img>
//       </div>
//   </div>
// ))}