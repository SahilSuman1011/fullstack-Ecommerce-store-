// frontend/src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-900 p-8 text-white">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-6" />
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl mb-4">${product.price}</p>
                <p className="text-lg mb-6">{product.description}</p>
                <button 
                    onClick={() => navigate('/checkout')} 
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
