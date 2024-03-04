import React from 'react';

const VisionMission = () => {

    const vission = "https://imgs.search.brave.com/56yvM_tUtgNq6Xr99PHiRG5IQ1I73lhzD6BWKvhiG70/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzIxLzI5Lzc3/LzM2MF9GXzEyMTI5/Nzc3M19oclJQRlFp/Wm15YXZQa08xbjNs/anlvclFZV3dJRm9k/bi5qcGc";
const mission = "https://imgs.search.brave.com/bFe40PANeIF_2KeIH066Jt2DbQR1KOaqQ-rLOAlTens/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODIz/OTI4ODMyL3Bob3Rv/L2J1c2luZXNzbWFu/LXNob3dzLXRoZS13/b3JkLW1pc3Npb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTFobUpDOG9EWUlp/ZmhkVXF6UVVXTlM2/LU5WaE13Z3Bqby1m/WllrV28wQkk9"
const values = "https://imgs.search.brave.com/WgerGcvFXlwALm182kPNzpfypspBPzwWNmU5u5KGigQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/NTUxNDQ0Ni9waG90/by92YWx1ZXMtdG9y/bi1wYXBlci1jb25j/ZXB0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ZSV9RUUFh/UnFjWUN0dEtZNnd5/a1NJMXBtM2JfcnRu/WC1sRGloVFFwblhB/PQ"

  return (
    <div className="bg-blue-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="md:text-3xl text-2xl font-bold text-gray-900">Our Mission, Vission & Values</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img className="h-24 w-24 object-cover rounded-full" src={mission} alt="Mission" />
            <h3 className="mt-4 text-xl font-semibold text-blue-600">Mission</h3>
            <p className="mt-2 text-sm text-gray-600">lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img className="h-24 w-24 object-cover rounded-full" src={vission} alt="Vission" />
            <h3 className="mt-4 text-xl font-semibold text-blue-600">Vision</h3>
            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img className="h-24 w-24 object-cover rounded-full" src={values} alt="Values" />
            <h3 className="mt-4 text-xl font-semibold text-blue-600">Values</h3>
            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
