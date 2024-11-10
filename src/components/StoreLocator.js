// components/StoreLocator.js
import React from 'react';
import Image from 'next/image';

const StoreLocator = () => {
  return (
    <div className="bg-gray-800 flex flex-col md:flex-row items-center m-6 md:m-10 rounded-xl p-6 md:p-8 font-poppins">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
        <div className="mb-4 md:mb-0 md:mr-6">
          <Image
            src="/Images/map.png" // Replace with the actual path to your image
            alt="Map Location"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>
        
        <div className="text-center md:text-left md:mr-4">
          <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-2">Checkout Stores Near You</h2>
          <p className="text-sm md:text-base text-gray-300">Find Divity Audio stores near your location for a quick and convenient experience.</p>
        </div>
        
        <div className="flex justify-center md:justify-end w-full mt-4 md:mt-0">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
