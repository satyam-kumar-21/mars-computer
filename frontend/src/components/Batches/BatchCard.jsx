// BatchCard.js

import React from 'react';

const BatchCard = ({ image, name, details, timing, actualPrice, price, duration }) => {
  const discount = ((actualPrice - price) / actualPrice) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-bold text-blue-900 mb-2">{name}</h3>
        <p className="text-gray-600">{details}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{timing}</p>
        <div>
          {discount > 0 && (
            <p className="text-sm text-red-500 line-through">₹{actualPrice.toLocaleString()}</p>
          )}
          <p className="text-lg font-bold text-gray-900">₹{price.toLocaleString()}</p>
          {discount > 0 && (
            <p className="text-xs text-green-600">Save {discount.toFixed(0)}%</p>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-600">{duration}</p>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">See Details</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md">Register</button>
        </div>
      </div>
    </div>
  );
};

export default BatchCard;
