import React from "react";
import image1 from "../images/Asgaard sofa 5.png";
import image2 from "../images/Outdoor sofa set 2.png";

const products = [
  {
    id: 1,
    title: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 4.7,
    reviews: 204,
    image: image1,
  },
  {
    id: 2,
    title: "Outdoor Sofa Set",
    price: "Rs. 224,000.00",
    rating: 4.2,
    reviews: 145,
    image: image2,
  }, {
    id: 2,
    title: "Outdoor Sofa Set",
    price: "Rs. 224,000.00",
    rating: 4.2,
    reviews: 145,
    image: image2,
  },
];

function Cart() {
  return (
    <div className="container mx-auto px-4 py-10 justify-center">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-medium">Go to Product page for more Products</h2>
          <a href="#" className="text-gray-500 hover:underline">
            View More
          </a>
        </div>
        <div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
            Add A Product
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ml-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="block relative h-48 rounded-lg overflow-hidden mb-4">
              <img
                alt={product.title}
                className="object-cover object-center w-full h-full transform hover:scale-105 transition"
                src={product.image}
              />
            </div>
            <div className="text-center">
              <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                {product.title}
              </h2>
              <p className="text-gray-500 mb-2">{product.price}</p>
              <div className="flex justify-center items-center">
                <span className="text-yellow-500 mr-1">{product.rating} </span>
                <div className="flex items-center">
                  {[...Array(5)].map((star, i) => (
                    <svg
                      key={i}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path d="M12 2l2.09 6.26h6.41l-5.2 3.78L15.5 18 12 14.6 8.5 18l1.18-5.96L4.48 8.26h6.41L12 2z"></path>
                    </svg>
                  ))}
                  {/* Partial Star */}
                  {product.rating % 1 !== 0 && (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <defs>
                        <linearGradient id="halfStar">
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="white" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#halfStar)"
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M12 2l2.09 6.26h6.41l-5.2 3.78L15.5 18 12 14.6 8.5 18l1.18-5.96L4.48 8.26h6.41L12 2z"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-gray-600 ml-2">
                  {product.reviews} Review{product.reviews > 1 && "s"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
