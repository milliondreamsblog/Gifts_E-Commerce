import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          {/* Image Section */}
          <div className="w-full lg:w-[628px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="src/assets/AboutUs.png"
                alt="Woman with flowers and gift box"
                className="w-full h-[432px] md:h-80 lg:h-96 object-cover"
              />
             
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About us
              </h2>
              
              <div className="space-y-4 ">
                <h3 className="text-xl md:text-2xl font-semibold text-[#A21114]">
                  Gifting with Grace & Meaning
                </h3>
                
                <p className="text-[#111927] text-[16px] md:text-[16px] leading-5 ">
                  At Indiana G, we believe that every gift should speak from the heart. Rooted 
                  in tradition yet designed for the modern woman, our gift sets are more than 
                  just products — they're curated experiences meant to delight, pamper, and 
                  inspire. Whether it's a celebration, a gesture of love, or a token of gratitude, 
                  each box is thoughtfully crafted to make her feel truly special.
                </p>
                
                <p className="text-[#A21114] text-sm md:text-base leading-5">
                  <span className="font-semibold">With high-quality ingredients, elegant packaging, and a touch of luxury — 
                  Indiana G is your go-to choice for gifting with purpose and poise.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;