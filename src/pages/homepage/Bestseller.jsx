import React from 'react';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Jade Plant In Gold Tone Metal Pot",
      price: "₹499",
      image: "src/assets/grid3.png"
    },
    {
      id: 2,
      name: "Personalised Love Affair LED Cushion",
      price: "₹499",
      image: "src/assets/grid2.png"
    },
    {
      id: 3,
      name: "Rose & Candle Serenade",
      price: "₹499",
      image: "src/assets/grid1.png"
    }
  ];

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-2xl font-bold text-black">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md  duration-300  w-90 h-92 flex flex-col">
                <div className="w-full h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default BestSellers;