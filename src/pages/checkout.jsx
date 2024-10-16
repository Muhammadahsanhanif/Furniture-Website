import React from 'react';
import Header from '../component/header';
import backgroundImage from "../images/Rectangle 1.jpg";
import Benefits from '../component/benefit';
import Footer from '../component/footer';

const Checkout = () => {
  return (
    <div>
      <Header />
      
      {/* Background Image and Title */}
      <div className="relative text-center">
        <div className="relative">
          <img
            className="w-full h-[40vh] md:h-[50vh] object-cover object-center"
            src={backgroundImage}
            alt="Scandinavian interior mockup wall decal background"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
            <h1 className="text-3xl md:text-4xl font-bold">Check Out</h1>
            <span className="text-sm md:text-lg">Home &gt; Check Out</span>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-6">
        {/* Billing Details Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Billing details</h2>
          <form className="space-y-4">
            {/* Name Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="company_name">Company Name (Optional)</label>
              <input
                type="text"
                id="company_name"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Company Inc."
              />
            </div>

            {/* Country / Region */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="country">Country / Region</label>
              <select
                id="country"
                className="w-full border border-gray-300 p-2 rounded-md"
                defaultValue="Sri Lanka"
              >
                <option>Sri Lanka</option>
                {/* Add more country options here */}
              </select>
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address">Street address</label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="123 Main St."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address">Street address</label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="123 Main St."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address">Street address</label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="123 Main St."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address">Street address</label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="123 Main St."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address">Street address</label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="123 Main St."
              />
            </div>
          </form>
        </div>

        {/* Product Summary Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Product</h2>
          <div className="bg-gray-50 p-6 border rounded-md">
            {/* Product Details */}
            <div className="flex justify-between">
              <span>Asgaard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Subtotal and Total */}
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span className="text-yellow-600">Rs. 250,000.00</span>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Payment Method Section */}
            <div className="mb-4">
              <h3 className="font-semibold">Direct Bank Transfer</h3>
              <p className="text-sm text-gray-600">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>

            {/* Payment Method Options */}
            <div className="space-y-2">
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment_method"
                    defaultChecked
                    className="form-radio text-black mr-2"
                  />
                  <span>Direct Bank Transfer</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment_method"
                    className="form-radio text-gray-400 mr-2"
                  />
                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience throughout this website, to manage access
              to your account, and for other purposes described in our <a href="#" className="text-blue-500 underline">privacy policy</a>.
            </p>

            {/* Place Order Button */}
            <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
              Place order
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <Benefits />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Checkout;
