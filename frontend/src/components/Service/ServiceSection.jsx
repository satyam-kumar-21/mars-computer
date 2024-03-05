import React from 'react';

const ServiceSection = () => {
  return (

    <>
    
    <div className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="16.93" y1="11.07" x2="12" y2="16" ></line>
                <line x1="7.07" y1="11.07" x2="12" y2="16" ></line>
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service 2</h3>
              <p className="text-gray-600">Integer nec odio. Praesent libero.</p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service 3</h3>
              <p className="text-gray-600">Sed cursus ante dapibus diam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    </>

  );
};

export default ServiceSection;
