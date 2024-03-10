import React from "react";

const LoginInstituteModel = ({ showLoginModel, toggleLoginModel }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("fixed")) {
      toggleLoginModel();
    }
  };

  return (
    <>
      {showLoginModel ? (
        <>
          <div
            onClick={handleClose}
            className="fixed inset-0 z-50 flex justify-center items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-2xl font-bold mb-4">Login Your Institute</h1>
                <form>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" className="border p-2 mb-2" />
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" className="border p-2 mb-2" />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    type="submit"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default LoginInstituteModel;
