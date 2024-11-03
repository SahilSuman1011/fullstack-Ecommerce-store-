// frontend/src/components/ProductListing.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 p-8 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <div key={product._id} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-lg mb-4">${product.price}</p>
                        </Link>
                        <Link to={`/product/${product._id}`} className="text-blue-400 hover:text-blue-200 font-semibold">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
