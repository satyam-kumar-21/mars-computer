import React from 'react';

const OrganizationSection = () => {
    return (
        <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-700">Thinking of Starting an Computer Institute?</h2>
                    <h3 className="mt-4 px-1 md:px-20 text-xl text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </h3>
                    <div className="mt-8 flex flex-col items-center justify-center sm:flex-row sm:justify-center">
                        <div className="mb-4 sm:mb-0 sm:mr-4">
                            <button
                                type="button"
                                className="w-full px-6 py-3 rounded-full shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register your institute
                            </button>
                        </div>
                        <div className="mb-4 sm:mb-0 sm:mx-4">
                            <button
                                type="button"
                                className="w-full px-6 py-3 rounded-full shadow-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login institute
                            </button>
                        </div>
                        <div className="sm:mx-4">
                            <button
                                type="button"
                                className="w-full px-6 py-3 rounded-full shadow-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                See all registered institutes
                            </button>
                        </div>
                    </div>
                </div>

               
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 bg-gray-400">
                    <div className=" rounded-lg shadow-md p-6 bg-gray-400">
                        <h3 className="text-2xl font-bold text-blue-900">Steps to open an institute</h3>
                        <div className="mt-4 grid grid-cols-1 gap-4">
                            <div className="bg-gray-200 rounded-lg p-4">
                                Step 1
                            </div>
                            <div className="bg-gray-200 rounded-lg p-4">
                                Step 2
                            </div>
                            <div className="bg-gray-200 rounded-lg p-4">
                                Step 3
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-400 rounded-lg shadow-md p-6">
                        <h3 className="text-2xl font-bold text-blue-900">Documents Needed For Registration</h3>
                        <div className="mt-4 grid grid-cols-1 gap-4">
                            <div className="bg-gray-200 rounded-lg p-4">
                              Document 1
                            </div>
                            <div className="bg-gray-200 rounded-lg p-4">
                                Document 2
                            </div>
                            <div className="bg-gray-200 rounded-lg p-4">
                                Document 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationSection;
