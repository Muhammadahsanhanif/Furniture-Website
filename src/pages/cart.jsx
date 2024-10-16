import React from 'react';
import backgroundImage from "../images/Rectangle 1.jpg";
import image4 from "../images/image 4 (1).jpg";
import Header from '../component/header';



const Cart = () => {
    
  return (
<div>
    <Header/>
    <div className="relative text-center">
        <div className="relative">
          <img
            className="w-full h-[40vh] md:h-[50vh] object-cover object-center"
            src={backgroundImage}
            alt="Scandinavian interior mockup wall decal background"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
            <h1 className="text-3xl md:text-4xl font-bold">cart</h1>
            <span className="text-sm md:text-lg">Home &gt; cart</span>
          </div>
        </div>
      </div>

<div className=" mx-auto p-4 bg-[#f5f1ea]">
      {/* Cart Table */}
      <div className="-x-auto">
        <table className="w-8/12 bg-white">
            <tr className="text-gray-600 uppercase text-sm leading-normal">
              <th className="p-1 gap-3">Product</th>
              <th className="p-1 gap-3">Price</th>
              <th className="p-1 gap-3">Quantity</th>
              <th className="p-1 gap-3">Subtotal</th>
            </tr>
            <tr className="border-b mt-8">
              <td className="p-4 flex items-center space-x-4">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={image4} // Replace with actual image URL
                  alt="product"
                />
                <span className="-gray-700">Asgaard Sofa</span>
              </td>
              <td className="p-4 text-gray-700">Rs. 250,000.00</td>
              <td className="p-4 text-center">
                <input
                  className="w-12 border rounded-md text-center"
                  type="number"
                  defaultValue={1}
                />
              </td>
              <td className="p-4 text-right text-gray-700">Rs. 250,000.00</td>
            </tr>
        </table>
      </div>
      

      {/* Cart Totals Section */}
      <div className=" flex  md:flex-row justify-end items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-lg text-yellow-600">
              Rs. 250,000.00
            </span>
          </div>
          <button className="w-full py-3 bg-yellow-600 text-white rounded-md mt-4 hover:bg-yellow-500">
            Check Out
          </button>
        </div>
      </div>
    </div>
</div>
  );
};

export default Cart;
