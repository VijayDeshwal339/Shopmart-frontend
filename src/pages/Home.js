import React from 'react'
import Header from '../components/Header'
import ProductDetail from '../features/product/ProductDetail'
import ProductList from '../features/product/ProductList'
import Footer from '../features/common/Footer'

const Home = () => {
  return (
    <div>
     <Header>
        <ProductList/>
        </Header> 
        <Footer/>
    </div>
  )
}

export default Home
