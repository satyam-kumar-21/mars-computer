import React from 'react';
import { FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa';

function BatchCardAdmin() {

  const cardData = {
    title: 'Course Title',
    time: '10:00 AM - 12:00 PM',
    price: 999.99, // Price in INR
    location: 'Virtual',
    image: 'https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-2">
      <img className="w-full" src={cardData.image} alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{cardData.title}</div>
        <div className="flex items-center mb-2">
          <FaClock className="mr-1" />
          <span className="text-gray-700">{cardData.time}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaRupeeSign className="mr-1" />
          <span className="text-gray-700">{formatCurrency(cardData.price)}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-1" />
          <span className="text-gray-700">{cardData.location}</span>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
        </div>
      
      </div>
    </div>
  );
}

export default BatchCardAdmin;
