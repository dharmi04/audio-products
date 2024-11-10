// components/OffersComponent.js

export default function Offer() {
    return (
        <div className=" m-3 p-4">
      <h2 className="text-sm font-semibold mb-2 ">Ongoing offers</h2>
      <div className="bg-gradient-to-r from-orange-500 via-orange-800 to-black rounded-lg p-6 flex items-center justify-between shadow-black">
        <h3 className="text-white text-2xl font-bold">
          Explore deals on Car Audio
        </h3>
        <button className="bg-orange-600 text-white md:text-xl text-xs  px-2 md:px-4 py-1 md:py-2 flex items-center">
          See More 
        </button>
      </div>
    </div>
    );
  }
  