// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Media() {
  return (
    <div className="bg-custom-gradient min-h-screen p-8 font-poppins mt-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
          <div className="w-[300px] md:w-[500px] h-[200px] md:h-[250px] rounded-2xl bg-gray-900 flex items-center justify-center shadow-md">
            <img src='/Images/phone.png' className="h-48 md:h-96 object-contain mb-10 md:mb-28" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-4xl md:text-7xl font-bold gradient-text">Media Players</h1>
          <p className="text-right mr-2 md:mr-10 mt-4 md:mt-0">Elevate your listening experience, </p>
          <p className="text-right mr-2 md:mr-10">bring music to life.</p>
          <button className="bg-black text-white font-semibold p-3 px-6 rounded-sm  w-auto md:w-full">
            Explore 
          </button>
        </div>
      </div>

      {/* Common Questions Section */}
      <section className="mb-16">
        <h2 className="text-4xl md:text-7xl font-bold gradient-text">Need Common</h2>
        <h2 className="text-4xl md:text-7xl font-bold gradient-text">Questions?</h2>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-700 mt-4">We have compiled a list of commonly asked questions to provide you quick entertainment answers.</p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="p-2 bg-gray-200 rounded-lg flex space-x-2 md:space-x-4">
              <button className="px-2 py-1 md:px-4 md:py-2 bg-gray-900 text-white rounded-lg">General</button>
              <button className="px-2 py-1 md:px-4 md:py-2 bg-gray-300 rounded-lg">Warranty</button>
              <button className="px-2 py-1 md:px-4 md:py-2 bg-gray-300 rounded-lg">Repairs</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* FAQ Card 1 */}
        <div className="rounded-lg p-4  shadow-md">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-black">How Long it Takes to Configure?</h3>
            <p className="text-black mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Image src="/Images/image1.png" alt="Configuration Video" width={480} height={200} className="rounded-t-lg object-cover" />
          </div>
        </div>

        {/* FAQ Card 2 */}
        <div className="rounded-lg p-4  shadow-md">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-black">How do you ship the product?</h3>
            <p className="text-black mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Image src="/Images/image2.png" alt="Shipping Video" width={480} height={200} className="rounded-t-lg object-cover" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 bg-custom-bg bg-cover bg-center text-white rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold">Dixity Audio</h3>
        <h2 className="text-2xl md:text-3xl font-bold my-4">Your road to Automotive Excellence</h2>
        <Link href="/shop">
          <p className="bg-orange-600 px-4 md:px-6 py-2 rounded-full mt-4 inline-block">Shop Now</p>
        </Link>
      </div>
    </div>
  );
}
