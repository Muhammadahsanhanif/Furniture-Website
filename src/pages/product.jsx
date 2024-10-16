import React from "react";
import image1 from "../images/image 1 (5).png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";
import image4 from "../images/image 4 (1).jpg";

// Array of product objects
const products = [
  {
    id: 1,
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discount: "-30%",
    image: image1,
  },
  {
    id: 2,
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discount: "",
    image: image2,
  },
  {
    id: 3,
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discount: "-50%",
    image: image3,
  },
  {
    id: 4,
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discount: "",
    image: image4,
  },
  {
    id: 1,
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discount: "-30%",
    image: image1,
  },
  {
    id: 2,
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discount: "",
    image: image2,
  },
];

// Remove duplicates
const uniqueProducts = Array.from(
  new Set(products.map((item) => item.id))
).map((id) => {
  return products.find((item) => item.id === id);
});

function Productvip() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {uniqueProducts.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-red-500 font-bold">{product.price}</p>
            {product.discount && (
              <p className="text-green-500">{product.discount}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productvip;
