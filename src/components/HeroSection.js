import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gray-50">
      {/* Banner Section */}
      <div className="relative bg-black text-white m-10 rounded-xl">
        <div className="absolute inset-0 opacity-20">
          {/* Background Image or Overlay */}
          <Image
            src="/images/bg.png" // Replace with your actual image path
            layout="fill"
            objectFit="cover"
            alt="Background"
          />
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16">
          <div className="max-w-lg">
            <h3 className="text-sm font-semibold uppercase text-gray-300 mb-2">
              Gear up with JBL speakers
            </h3>
            <h1 className="text-4xl font-bold mb-2">JBL Club WS 1200</h1>
            <p className="text-lg mb-6">12" Shallow Mount Sunwoofer</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition">
              Shop Now
            </button>
          </div>
          <div className=" md:block">
            <Image
              src="/images/speaker.png" // Replace with your actual product image path
              width={300}
              height={300}
              alt="JBL Club WS 1200"
            />
          </div>
        </div>
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 w-full flex justify-center">
          <div className="flex space-x-2">
            <span className="h-2 w-2 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer"></span>
            <span className="h-2 w-2 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer"></span>
            <span className="h-2 w-2 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer"></span>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex justify-around py-6 bg-gray-100 text-gray-800">
        <div className="text-center">
          <img src="/images/warranty.png" alt="Warranty" className="mx-auto mb-2 w-8 h-8" />
          <p className="font-semibold">1 year</p>
          <p className="text-sm text-gray-600">Warranty</p>
        </div>
        <div className="text-center">
          <img src="/images/replacement.png" alt="Replacement" className="mx-auto mb-2 w-8 h-8" />
          <p className="font-semibold">7 Day</p>
          <p className="text-sm text-gray-600">Replacement</p>
        </div>
        <div className="text-center">
          <img src="/images/billing.png" alt="GST Billing" className="mx-auto mb-2 w-8 h-8" />
          <p className="font-semibold">GST</p>
          <p className="text-sm text-gray-600">Billing</p>
        </div>
        <div className="text-center">
          <img src="/images/delivery.png" alt="Delivery" className="mx-auto mb-2 w-8 h-8" />
          <p className="font-semibold">Your Place</p>
          <p className="text-sm text-gray-600">Delivery</p>
        </div>
      </div>
    </section>
  );
}
