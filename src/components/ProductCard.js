// components/ProductCard.js

export default function ProductCard() {
    return (
      <div className="flex flex-col border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white font-poppins">
        <div className="relative">
          <img src="/Images/product-1.png" alt="Product" className="w-full rounded-lg" />
          {/* <button className="absolute top-2 right-2 text-red-500 hover:text-red-600">
            ❤️
          </button> */}
        </div>
        <div className="flex items-center justify-center mt-2 space-x-2">
          {/* Color options */}
          {/* <span className="w-4 h-4 bg-black rounded-full border"></span>
          <span className="w-4 h-4 bg-white rounded-full border"></span> */}
        </div>
        <h3 className="mt-4 text-lg font-semibold">Club WS 1200</h3>
        <p className="text-sm text-gray-500">Product: Amplifier • Size: 15kg</p>
        <p className="text-md font-bold mt-2">INR 12,000</p>
        <button className="mt-4 px-2 py-2 bg-yellow-100 text-yellow-600 font-semibold rounded-lg hover:bg-yellow-200 flex items-center justify-center">
          <span>🎁</span>
          <span className="ml-1 text-sm">Add to Cart (incl. Coupon)</span>
        </button>
      </div>
    );
  }
  