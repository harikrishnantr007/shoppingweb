import React, { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom';
import '../Sass/Header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchreult } from '../Store/Searchslice';
const Header = () => {
 const[search,setSearch]=useState('');
 const cartitems=useSelector(state=>state.cart);
 const dispatch=useDispatch();
const handlesubmit=(e)=>{
 e.preventDefault();
 dispatch(setSearchreult(search))
}
return (
 <div className='header'>
 <Link className='homelink' to={'/'}><div className="logo">ShopeME</div></Link>
 <div className="categories">
 <p>MEN</p>
 <p>WOMEN</p>
 <p>KIDS</p>
 <p>HOME & LIVING</p>
 </div>
 <div className="search">
 <form onSubmit={handlesubmit}  className='search-form'>
 <input 
 className='search-box' 
 type="search" 
 placeholder='search for products,brands and more'
value={search}
onChange={(e)=>setSearch(e.target.value)}
></input><SearchSharpIcon/>
 </form>
 </div> 
 <div className="user-info">
<p><Person2OutlinedIcon sx={{ fontSize: 30 }}/></p>
 <Link to='/cart'><ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/><div className='cart-count'>{cartitems.length}</div></Link>    

  </div>
 
 </div>
 )
}

export default Header