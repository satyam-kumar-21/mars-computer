import React, { useState } from "react";
import RegisterInstituteModel from "./RegisterInstituteModel";
import LoginInstituteModel from "./LoginInstituteModel";
import { Link } from "react-router-dom";

const OrganizationSection = () => {
  const computerImage =
    "https://imgs.search.brave.com/jjFI70TvhM2vvp1IxICEx__uct-iERQVrBp4uXWbm_w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/MDYxNjc3Mi9waG90/by9wb3J0cmFpdC1v/Zi10aG91Z2h0ZnVs/LXlvdW5nLW1hbi53/ZWJwP2I9MSZzPTE3/MDY2N2Emdz0wJms9/MjAmYz12U2kycUo2/LWFTMnJqZjhmZG9n/MmRXRlh4TnRLTi0z/LU9RYWxpa1hpZThF/PQ";
  const stepsImage =
    "https://media.istockphoto.com/id/1486569619/photo/baby-steps-text-on-wooden-blocks-isolated-on-soft-pink-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=nhUX8NG510MoX0V4KIEJEMz_I0scX1ciNuQbsQEkZe0=";
  const documentsImage =
    "https://plus.unsplash.com/premium_photo-1661482838567-c6adfcb6da02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3VtZW50JTIwaW1hZ2VzfGVufDB8fDB8fHww";


    const [showRegisterModel , setRegisterModel] = useState(false);

    const toggleRegisterModel = () => {
        setLoginModel(false)
        setRegisterModel(!showRegisterModel);
    }

    const [showLoginModel , setLoginModel] = useState(false);

    const toggleLoginModel = () => {
        setRegisterModel(false)
        setLoginModel(!showLoginModel);
    }
  return (
    <div className="bg-gray-100 z-0 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto z-0" >
        <div className="text-center relative z-0">
          <img
            src={computerImage}
            alt="Computer"
            className="h-64 w-full object-cover rounded-lg shadow-md mb-8 z-0"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-gray-900 z-0">
              Thinking of Starting a Computer Institute?
            </h2>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center sm:flex-row sm:justify-center">
          <div className="mb-4 sm:mb-0 sm:mr-4" onClick={toggleRegisterModel}>
            <button
              type="button"
              className="w-full px-6 py-3 rounded-full shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Your Institute
            </button>
          </div>
          <div className="mb-4 sm:mb-0 sm:mx-4" onClick={toggleLoginModel}>
            <button
              type="button"
              className="w-full px-6 py-3 rounded-full shadow-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login Institute
            </button>
          </div>
          <div className="sm:mx-4">
            <button
              type="button"
              className="w-full px-6 py-3 rounded-full shadow-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Link to="/organization/all-institutes">See All Registered Institutes</Link>
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <img
              src={stepsImage}
              alt="Steps"
              className="h-48 w-full object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-900">
              Steps to Open an Institute
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg p-4">Step 1</div>
              <div className="bg-gray-300 rounded-lg p-4">Step 2</div>
              <div className="bg-gray-300 rounded-lg p-4">Step 3</div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <img
              src={documentsImage}
              alt="Documents"
              className="h-48 w-full object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-900">
              Documents Needed For Registration
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg p-4">Document 1</div>
              <div className="bg-gray-300 rounded-lg p-4">Document 2</div>
              <div className="bg-gray-300 rounded-lg p-4">Document 3</div>
            </div>
          </div>
        </div>
      </div>

      <RegisterInstituteModel toggleRegisterModel={toggleRegisterModel} showRegisterModel={showRegisterModel}/>
      <LoginInstituteModel toggleLoginModel ={toggleLoginModel} showLoginModel={showLoginModel}/>
    </div>
  );
};

export default OrganizationSection;
