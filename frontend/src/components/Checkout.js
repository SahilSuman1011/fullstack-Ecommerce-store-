// frontend/src/components/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

    const handlePayment = (status) => {
        navigate(`/payment/${status}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-md text-center">
                <h2 className="text-3xl font-bold mb-6">Checkout</h2>
                <button 
                    onClick={() => handlePayment("success")} 
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded mr-4"
                >
                    Pay Now
                </button>
                <button 
                    onClick={() => handlePayment("failure")} 
                    className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Checkout;
