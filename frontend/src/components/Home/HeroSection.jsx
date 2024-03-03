import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const imageUrl =
    "https://imgs.search.brave.com/ok5WgWadguq4S1zoOTxSct3vnTMIiLnAJzebHCFj7CY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTMyMzgxL3Bob3Rv/L2NvbXB1dGVyLWNs/YXNzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10WGdGdjBF/WVJVNkV1SEdqb3lW/bGEtVTY0OXd1WUNo/dnlfSjRlNEJkYnlv/PQ";

  return (
    <div className="w-full md:min-h-screen h-[75vh] bg-zinc-200 flex flex-col justify-around p-2">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="order-2 md:order-1 flex flex-col justify-center md:items-start w-full md:pl-20 py-8">
          <p className="text-2xl">Welcome to our institute</p>
          <h1 className="py-3 text-5xl text-blue-700 md:text-6xl font-bold">
            Mars Computer
          </h1>
          <p className="text-lg">Explore the world of computers with Mars Computer, empowering you for a digital future.</p>
          <button
            className="py-3 px-6 sm:w-[60%] my-4 text-white border bg-indigo-600 border-indigo-600
hover:bg-transparent hover:text-indigo-600 rounded-md"
          >
            <Link to="/courses">
            Explore Now
            </Link>
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img className="w-full md:w-[80%] md:ml-[10%] pt-14 md:pt-0" src={imageUrl} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
