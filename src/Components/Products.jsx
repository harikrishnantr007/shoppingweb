import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import '../Sass/Products.scss'
import { useDispatch } from 'react-redux';
import { add } from '../Store/Cartslice';


const Products = ({data}) => {
  const dispatch=useDispatch();
  const addtoCart=(data)=>{
    dispatch(add(data))
  }
  return (
    <>
       {data ? (
        
        <div className="product-card">
          <div className='card-top'>
            <img className="product-img" src={data.image} alt="" />
          </div>
          <div className="card-bottom">
          <div className="product-title">{data.title}</div>
          <div className="product-price">Rs. {data.price}</div>
          <div className="bottom-info">
          <div className="product-rating">{data.rating.rate}<StarIcon style={{color:'gold'}} /></div>
       
       <button className='addtocart' onClick={()=>addtoCart(data)}>Add to cart</button> 
          </div>
          

          </div>
          
        </div>
        
      ) : (
        <p>No product data available</p> // Handle cases where a product might not have a title
      )}
    
    </>
   
  
  )
}

export default Products