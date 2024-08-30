import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/Products';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
</Routes>
      <Footer/>
    </div>
  );
}

export default App;