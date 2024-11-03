// frontend/src/components/PaymentStatus.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentStatus = () => {
    const { status } = useParams();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center">
                {status === "success" ? (
                    <h2 className="text-3xl font-bold text-green-500">Payment Successful!</h2>
                ) : (
                    <h2 className="text-3xl font-bold text-red-500">Payment Failed!</h2>
                )}
            </div>
        </div>
    );
};

export default PaymentStatus;
