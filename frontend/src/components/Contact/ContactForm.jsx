// ContactForm.js

import React from 'react';

const ContactForm = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "diadeeneducation@example.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+91 6203176139",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Runni saidpur, Sitamarhi Bihar 843320",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <main className="py-14 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-around lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-gray-600 font-semibold">Contact</h3>
            <p className="text-blue-600 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have. We look
              forward to hearing from you! Please fill out the form, or use the
              contact information below.
            </p>
            <div>
              <ul className="mt-6 flex flex-col gap-y-6 items-start">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p className="text-gray-700">{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-10 sm:max-w-lg lg:max-w-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  required
                  placeholder='Enter your name'
                  className="w-full mt-2 px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder='Enter your email'
                  className="w-full mt-2 px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>
              <div>
              <input
              type="tel"
              required
              placeholder="Enter your contact no."
              onKeyPress={(e) => {
                const pattern = /^[0-9\b]+$/;
                if (!pattern.test(e.key)) {
                  e.preventDefault();
                }
              }}
              className="w-full mt-2 px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
            </div>
              <div>
                <textarea
                  required
                  placeholder='Your message'
                  className="w-full h-36 mt-2 px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
