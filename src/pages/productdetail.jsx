import React from 'react';
import { useParams } from 'react-router-dom';
import products from './product'; // You can import the products array here or fetch it from an API

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  return (
    <div className="container mx-auto p-6">
      {product ? (
        <div className="flex">
          <img src={product.image} alt={product.name} className="w-1/3 h-48 object-cover rounded-md" />
          <div className="ml-6">
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-red-500 text-2xl font-bold">{product.price}</p>
            {product.discount && (
              <p className="text-green-500 font-semibold">{product.discount}</p>
            )}
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetail;
