// OurBatches.js

import React from 'react';
import BatchCard from './BatchCard';

const OurBatches = () => {
  const batches = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Batch 1',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timing: 'Mon-Fri, 9:00 AM - 11:00 AM',
      actualPrice: 30000,
      price: 20000,
      duration: '3 months',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1658203897415-3cad6cfad5c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXMlMjB3b3JkfGVufDB8fDB8fHww',
      name: 'Batch 2',
      details: 'Integer nec odio. Praesent libero. consectetur adipiscing elit.',
      timing: 'Mon-Fri, 2:00 PM - 4:00 PM',
      actualPrice: 35000,
      price: 25000,
      duration: '4 months',
    },
    {
      id: 3,
      image: 'https://imgs.search.brave.com/ctgFRW2IWlqAjj-x0baiiP_TYTpY25tHrmNO7xuI_co/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXdpcmUuY29t/L3RobWIvSEpFcWF2/R1JUaXFUcG12aDV4/cjlHVWpSNlBjPS8z/NjB4MjQwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL1Bv/d2VycG9pbnQtNThj/MDg0NzEzZGY3OGMz/NTNjZWMyNDA3Lmpw/Zw',
      name: 'Batch 3',
      details: 'Sed cursus ante dapibus diam. consectetur adipiscing elit.',
      timing: 'Sat-Sun, 10:00 AM - 12:00 PM',
      actualPrice: 20000,
      price: 18000,
      duration: '2 months',
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 pb-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center pb-4">
          <h2 className="text-4xl font-bold text-blue-700">Our Batches</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch) => (
            <BatchCard
              key={batch.id}
              image={batch.image}
              name={batch.name}
              details={batch.details}
              timing={batch.timing}
              actualPrice={batch.actualPrice}
              price={batch.price}
              duration={batch.duration}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">See More</button>
        </div>
      </div>
    </div>
  );
};

export default OurBatches;
