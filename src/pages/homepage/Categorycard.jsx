  import React from 'react';

  const CategoryCard = ({ category }) => {
    return (
      <div className="group cursor-pointer">
        <div className="relative">
          {/* Card Container */}
          <div className={`${category.bgColors} rounded-2xl p-6   w-full h-full flex flex-col justify-center items-center`}>
            {/* Image Container */}
            <div className="relative mb-4">
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md  transition-shadow duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-500"
                />
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors duration-300 w-32 h-32 mx-auto"></div>
            </div>
            
            {/* Category Name */}
            <h3 className="text-center text-1rem font-semibold text-gray-800 ">
              {category.name}
            </h3>
          </div>
          
          {/* Hover Effect Background */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div> */}
        </div>
        
        {/* Subtle Shadow Effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl transform translate-y-1"></div> */}
      </div>
    );
  };

  export default CategoryCard;