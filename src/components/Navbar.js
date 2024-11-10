import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md font-poppins">
      {/* Top Row: Logo, Search, Cart */}
      <div className="flex  items-center justify-between px-1 md:px-4 py-2">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Divity Audio" width={30} height={30} />
          <span className=" text-sm md:text-xl font-semibold text-gray-900">Divity Audio</span>
        </Link>

        {/* Right Side: Search Icon, Car Model, User Icon, Cart */}
        <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          <button className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line x1="16" y1="16" x2="22" y2="22" strokeWidth="2" />
            </svg>
          </button>

          {/* Car Model */}
          <div className="flex items-center space-x-2 px-2 md:px-3 py-1 rounded-full bg-nav-bg">
            <Image src="/images/car.png" alt="Car Model" width={30} height={30} className="rounded-full" />
            <span className="text-xs md:text-sm font-medium text-white">Suzuki Swift VDI</span>
          </div>

          {/* User Icon */}
          <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-nav-bg text-white rounded-full">
            <span className="text-xs md:text-base font-bold">M</span>
          </div>

          {/* Cart Button */}
          <button className="flex items-center bg-orange-500 text-white px-3 md:px-4 py-2 rounded-full hover:bg-orange-600 transition">
            <svg className="h-4 md:h-5 w-4 md:w-5 mr-1 md:mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H19.6l-1.2 4H7zM13 16v6m-4 0h8m-4-6v6M3 3l2-2 4 4 2-2m0 0l6 6M5.4 5L3 3" />
            </svg>
            <span className="text-xs md:text-sm">Cart</span>
          </button>
        </div>
      </div>

      {/* Bottom Row: Menu Items */}
      <div className="bg-gray-200 px-2 sm:text-xs md:px-4 py-1 md:py-2 flex flex-wrap justify-center space-x-4 md:space-x-8">
        <Link href="#" className="text-orange-500 text-sm md:text-base">Audio</Link>
        <Link href="#" className="text-gray-800 text-sm md:text-base">Vision</Link>
        <Link href="#" className="text-gray-800 text-sm md:text-base">OEM</Link>
        <Link href="#" className="text-gray-800 text-sm md:text-base">Interior</Link>
        <Link href="#" className="text-gray-800 text-sm md:text-base">Aesthetics</Link>
        <Link href="#" className="text-gray-800 text-sm md:text-base">Necessities</Link>
        
      </div>
    </nav>
  );
}
