import React from 'react';
import CategoryCard from './Categorycard';

export const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Corporate Gifts',
      image: 'src/assets/ShopByCategory.png',
      bgColor: 'bg-gradient-to-br from-slate-100 to-slate-200'
    },
    {
      id: 2,
      name: 'Home & Decor',
      image: 'src/assets/ShopByCategory2.png',
      bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100'
    },
    {
      id: 3,
      name: 'Festive Sets',
      image: 'src/assets/ShopByCategory3.png',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
    {
      id: 4,
      name: 'Personal Care',
      image: 'src/assets/ShopByCategory4.png',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      id: 5,
      name: 'Wellness & Beauty',
      image: 'src/assets/ShopByCategory5.png',
      bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100'
    },
    {
      id: 6,
      name: 'Gourmet Treats',
      image: 'src/assets/ShopByCategory6.png',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100'
    }
  ];

  return (
    <div className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <p className="text-3xl md:text-3xl font-bold ">
            Shop by Category
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;