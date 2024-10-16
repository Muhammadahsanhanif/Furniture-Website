import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-8">
          {/* Company Info */}
          <div className="mb-6 lg:mb-0">
            <h2 className="font-bold text-xl text-black mb-4">Funiro.</h2>
            <address className="not-italic text-gray-500 mb-4">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </address>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Links */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-sm font-bold text-gray-500 mb-2">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:underline">Home</a></li>
                <li><a href="#" className="text-black hover:underline">Shop</a></li>
                <li><a href="#" className="text-black hover:underline">About</a></li>
                <li><a href="#" className="text-black hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Help */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-sm font-bold text-gray-500 mb-2">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:underline">Payment Options</a></li>
                <li><a href="#" className="text-black hover:underline">Returns</a></li>
                <li><a href="#" className="text-black hover:underline">Privacy Policies</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold text-gray-500 mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="border border-gray-300 px-4 py-2 w-full text-black rounded-md"
                />
                <button className="px-4 py-2 bg-black text-white font-semibold rounded-md">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-4 text-gray-500 text-sm text-center">
          <p>© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
