import React, { useState } from 'react';

const GiftsForEveryOccasion = () => {
  const [activeTab, setActiveTab] = useState('Birthday');

  const tabs = [
    'Birthday',
    'Anniversary', 
    'Festivals',
    'Love & Romance',
    'Congratulations',
    'Thank You & Sorry'
  ];

  const products = [
    {
      id: 1,
      name: 'Angelic Rose Bouquet & Black Forest Birthday Bliss',
      price: 499,
      image: 'src/assets/categroy.png'
    },
    {
      id: 2,
      name: 'Angelic Rose Bouquet & Black Forest Birthday Bliss', 
      price: 499,
      image: 'src/assets/categroy.png'
    },
    {
      id: 3,
      name: 'Angelic Rose Bouquet & Black Forest Birthday Bliss',
      price: 499, 
      image: 'src/assets/categroy.png'
    },
    {
      id: 4,
      name: 'Angelic Rose Bouquet & Black Forest Birthday Bliss',
      price: 499,
      image: 'src/assets/categroy.png'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
   
      <h2 className="text-3xl font-bold text-black mb-8">Gifts for Every Occasion</h2>
      
     
      <div className="flex flex-wrap gap-1 mb-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
              activeTab === tab
                ? 'text-red-600 border-red-600 bg-white-50'
                : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
          >
           
            <div className="group aspect-square bg-pink-50  flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />  
            </div>
            
          
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 leading-tight hover:underline hover:text-[#A21114]">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftsForEveryOccasion;