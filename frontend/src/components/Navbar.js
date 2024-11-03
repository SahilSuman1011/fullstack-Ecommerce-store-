// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="text-3xl font-bold hover:text-blue-400">My eCommerce</Link>
                <div>
                    <Link to="/" className="mr-6 hover:text-blue-400">Home</Link>
                    <Link to="/checkout" className="hover:text-blue-400">Checkout</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
