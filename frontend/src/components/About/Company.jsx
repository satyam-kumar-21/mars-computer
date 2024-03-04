import React from "react";

function Company() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-1 md:mt-20">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-blue-700 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse
                et magna quis elit efficitur consequat. Mauris eleifend velit a
                pretium iaculis. Donec sagittis velit et magna euismod, vel
                aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
                arcu volutpat vel.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
