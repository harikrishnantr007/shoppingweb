import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
import '../Sass/Home.scss'
import { remove } from '../Store/Cartslice';

const Cart = () => {
 const cartproducts=useSelector(state=>state.cart)
 const dispatch=useDispatch();
 console.log(cartproducts,'products in cart')
 const removeCart=(id)=>{
 dispatch(remove(id))
 }
 return (
 <>
 <div className="container">
 <h1 style={{textAlign:'center'}}>Cart</h1>
 <div className="cart-list">
 {cartproducts.map((m)=>{
 return(
 <div className="product-card">
 <div className='card-top'>
 <img className="product-img" src={m.image} alt="" />
 </div>
 <div className="card-bottom">
 <div className="product-title">{m.title}</div>
 <div className="product-price">Rs. {m.price}</div>
 <div className="bottom-info">
 <div className="product-rating">{m.rating.rate}<StarIcon style={{color:'gold'}} /></div>
<button className='removecart' onClick={()=>removeCart(m.id)}>Remove</button>
 </div>


 </div>

 </div>
 )
 })}
</div>
 </div>
 

 </>
)
}

export default Cart