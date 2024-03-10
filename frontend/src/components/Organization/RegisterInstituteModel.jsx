import React from "react";

const RegisterInstituteModel = ({ showRegisterModel, toggleRegisterModel }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("fixed")) {
      toggleRegisterModel();
    }
  };

  return (
    <>
      {showRegisterModel ? (
        <>
          <div
            className="fixed inset-0 z-50 pt-16 flex justify-center items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            onClick={handleClose}
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-2xl font-bold mb-4">Register Your Institute</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Institute Name"
                      className="border p-2 mb-2 w-full"
                    />
                    <h2 className="text-xl font-bold my-4">Founder Details</h2>
                    <input
                      type="text"
                      placeholder="Founder Name"
                      className="border p-2 mb-2 w-full"
                    />
                    ...
                  </div>
                  <div>
                    <h2 className="text-xl font-bold my-4">Co-Founder Details</h2>
                    <input
                      type="text"
                      placeholder="Co-Founder Name"
                      className="border p-2 mb-2 w-full"
                    />
                    ...
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default RegisterInstituteModel;
