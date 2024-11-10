// Footer.js
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-8 font-poppins">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/Images/Logo.png" alt="Divity Audio Logo" width={30} height={30} />
            <span className="text-white text-lg font-semibold">Divity Audio</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white">Tires</a>
            <a href="#" className="hover:text-white">Batteries</a>
            <a href="#" className="hover:text-white">Lubricants</a>
            <a href="#" className="hover:text-white">Car Accessories</a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-gray-400 hover:text-white"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-gray-400 hover:text-white"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-gray-400 hover:text-white"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-gray-400 hover:text-white"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h4 className="text-white font-semibold">Subscribe</h4>
          <div className="flex items-center border border-gray-600 rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-gray-400 focus:outline-none"
            />
            <button className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded-full">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500">
            By subscribing you agree to with our <a href="#" className="text-gray-400 underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies Settings</a>
        </div>
        <p className="mt-4 md:mt-0">&copy;2024, All rights reserved.</p>
      </div>
    </footer>
  );
}
