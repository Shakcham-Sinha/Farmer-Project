import React from 'react';
import { Search, Filter, MessageSquare } from 'lucide-react';
import type { Product } from '../types';

export function Marketplace() {
  const [products] = React.useState<Product[]>([
    {
      id: '1',
      name: 'Organic Wheat',
      price: 320.50,
      quantity: 1000,
      unit: 'kg',
      location: 'Kansas, USA',
      sellerId: 'seller1',
      sellerName: 'John Smith',
      imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Premium Rice',
      price: 450.75,
      quantity: 2000,
      unit: 'kg',
      location: 'California, USA',
      sellerId: 'seller2',
      sellerName: 'Maria Garcia',
      imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80',
      createdAt: new Date(),
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Post Listing
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search crops..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent">
                <option>All Categories</option>
                <option>Grains</option>
                <option>Vegetables</option>
                <option>Fruits</option>
              </select>
              <select className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent">
                <option>All Locations</option>
                <option>Kansas</option>
                <option>California</option>
                <option>Texas</option>
              </select>
              <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50">
                <Filter className="h-5 w-5 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.location}</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">Quantity: {product.quantity} {product.unit}</p>
                  <p className="text-gray-600">Seller: {product.sellerName}</p>
                </div>
                <div className="flex justify-between items-center">
                  <button className="flex items-center text-green-600 hover:text-green-700">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Contact Seller
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}