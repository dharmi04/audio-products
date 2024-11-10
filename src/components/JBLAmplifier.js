// components/JBLAmplifiers.js
import React from 'react';
import Image from 'next/image';

const JBLAmplifier = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-8 mt-10 md:mt-20 font-poppins">
      <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl md:text-7xl font-bold gradient-text mb-4">JBL Amplifier</h1>
        <p className="text-gray-700 text-sm md:text-base text-center md:text-left mb-2">Elevate your listening experience,</p>
        <p className="text-gray-700 text-sm md:text-base text-center md:text-left mb-4">bring music to life.</p>
        <div className="flex justify-center md:justify-start mr-0 md:mr-8 lg:mr-0">
        <button className="bg-black text-white font-semibold p-3 px-6 rounded-sm  w-auto md:w-full">
            Explore 
          </button>
        </div>
      </div>
      
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <div className="w-[300px] h-[150px] md:w-[500px] md:h-[250px] rounded-2xl bg-gray-900 flex items-center justify-center shadow-md mb-2 md:mb-0">
          <img src="/Images/jbl.png" className="h-48 md:h-96 object-contain mb-10 md:mb-28" alt="JBL Amplifier" />
        </div>
      </div>
    </div>
  );
};

export default JBLAmplifier;
