import { Route, Routes } from 'react-router-dom';
import './App.css';

import Pagenotfound from './pages/pagenotfound';
import Checkout from './pages/Checkout';
import CartPage from './pages/CartPage';
import Home from './pages/Home'
import ProductDetail from './features/product/ProductDetail';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import ForgotPassword from './features/auth/ForgotPassword';
import ResetPassword from './features/auth/ResetPassword';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product-detail' element={<ProductDetail/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='*' element={<Pagenotfound/>}/>

    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/reset-password' element={<ResetPassword/>}/>
    </Routes>
    </>
  );
}

export default App;
