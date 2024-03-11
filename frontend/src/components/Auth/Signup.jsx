import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { registerUserAction } from "../../store/actions/userAction";

function Signup({  isSignupOpen, toggleModal, toggleSignupModal }) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.password !== formData.confirmPassword){
      setErrorMessage("Password do not matched");
      return;
    }

    try {
      await dispatch(registerUserAction(formData));

      toggleModal();
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
  return (
    <>
      {isSignupOpen && (
        <div
          className="fixed top-0 right-0 left-0 z-5000 flex md:px-0 px-3 justify-center items-center w-full h-screen bg-black bg-opacity-50"
          onClick={toggleSignupModal}
        >
          <div
            className="relative mb-[121px] md:mb-0 p-4 w-full md:w-1/3 md:mt-7 max-w-2xl max-h-full bg-white rounded-lg shadow "
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" w-full text-gray-700 space-y-5">
              <div className="text-center ">
                <h3 className=" text-2xl text-blue-600 font-bold sm:text-3xl">
                  Create your account
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <input
                    id=""
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="Enter your email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="confirmPassword"
                  placeholder="Confirm password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
               
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
                <button type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Sign up
                </button>
              </form>
              <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>
              <p className="text-center">
                Already have an account.{" "}
                <button
                  onClick={toggleModal}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
