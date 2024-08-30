import React, { useEffect } from 'react'
import Products from './Products';
import { CircularProgress } from '@mui/material';
import '../Sass/Home.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../Store/Productslice';

const Home = () => {
 const dispatch=useDispatch();
 const {data:products}=useSelector(state=>state.product)
 
const searchitem=useSelector(state=>state.search)
console.log(searchitem,'searcggggggg')
useEffect(()=>{
 dispatch(fetchproducts())
},[dispatch]);

useEffect(()=>{


})
 return (
 <div className="container">
<div className='products-lists'>
{products?(
 products.map((p)=>(
<Products data={p}/>
))
):(
<div className="loading-container">
 <CircularProgress className='loading'/>

 </div>

 
)}
</div>
</div>
 )
}

export default Home