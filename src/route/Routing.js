import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Signup from '../page/Signup'
import Login from '../page/Login'
import { CartProvider } from '../components/ContextReducer'
import Cart from '../components/Cart'

const Routing = () => {
    return (
        <CartProvider>

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>

    )
}

export default Routing