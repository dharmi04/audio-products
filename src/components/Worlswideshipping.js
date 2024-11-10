import Image from 'next/image';
import Link from 'next/link';
export default function Worldwideshipping() {
    return (
        <section className="bg-offer-bg text-white py-12 md:py-20 px-6 md:px-16 m-10 rounded-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-gray-200">Worldwide</span> <span className="text-white">Shipping</span>
          </h1>
          <p className="text-gray-400 max-w-md">
            We have worldwide shipping, so you can flexibly choose which device is compatible for you.
          </p>
          <Link href="/shop">
            <p className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 mt-4 rounded-full text-lg">
              Shop Now <span aria-hidden="true">→</span>
            </p>
          </Link>
        </div>

        {/* Right Section - Map and Product Card */}
        <div className="relative flex justify-center md:justify-end">
          {/* Background map image */}
          <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover opacity-50 md:opacity-100" style={{ backgroundImage: "url('/Image/bg.png')" }}></div>

          {/* Product Card */}
          <div className="relative  p-4 md:p-6 rounded-lg  w-64">
            <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-2 rounded-md">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
          <img src="/Images/onespeak.png" alt="image" className="w-22 h-22 object-contain " />
        </div>
        <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">Sony Speakers</h3>
              <p className="text-white mt-1">On Trending</p>
              <Link href="/product">
                <p className="text-white font-semibold">Check Now</p>
              </Link>
            </div>
            </div>
            
          </div>

    
        </div>
      </div>
    </section>
    );
}
