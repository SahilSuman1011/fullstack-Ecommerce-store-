// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import PaymentStatus from './components/PaymentStatus';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment/:status" element={<PaymentStatus />} />
            </Routes>
        </Router>
    );
};

export default App;
