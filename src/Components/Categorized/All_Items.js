import {React,useEffect,useState } from 'react'
import ProductCard from '../ProductCard';
import "./All_Items.css"

function All_Items() {
  const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
    // Fetch data from the Express API
    fetch('https://sampleserver-96f7c60072ed.herokuapp.com/getProducts') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(products);
  return (
    <div className='ProductGrid'>
      {products.map((product)=>(
        <ProductCard key = {ProductCard.id} product={product}/>
      ))}
      
    </div>
  )
}

export default All_Items