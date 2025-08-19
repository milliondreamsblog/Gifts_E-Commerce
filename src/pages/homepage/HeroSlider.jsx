import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  
  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/264923/pexels-photo-264923.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Thoughtful Gift Ideas',
      subtitle: 'Beautiful presents for every occasion and celebration',
      buttonText: 'Explore Gifts',
      overlayColor: 'bg-gradient-to-r from-purple-600/80 to-pink-600/80'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/6195114/pexels-photo-6195114.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Celebrate Thoughtfully with Curated Gift Sets',
      subtitle: 'Handpicked gifting experiences for festivals, weddings, and corporates',
      buttonText: 'Shop Now',
      overlayColor: 'bg-gradient-to-r from-orange-500/85 to-red-600/85'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/6177596/pexels-photo-6177596.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Collections',
      subtitle: 'Luxurious gift sets crafted with attention to detail',
      buttonText: 'View Collection',
      overlayColor: 'bg-gradient-to-r from-amber-600/80 to-yellow-500/80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getSlideIndex = (offset) => {
    const index = currentSlide + offset;
    if (index < 0) return slides.length + index;
    if (index >= slides.length) return index - slides.length;
    return index;
  };

  return (
    <div className="relative h-[316px] overflow-hidden mx-4 mt-4">
      <div className="flex items-center justify-center h-full gap-4">

        <div className="relative w-1/4 h-full overflow-hidden rounded-l-[16px] shadow-lg">
          <img
            src={slides[getSlideIndex(-1)].image}
            alt="Previous slide"
            className="w-full h-full object-cover opacity-75 hover:opacity-90 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

   
        <div className="relative w-[597px] h-full overflow-hidden rounded-[16px] shadow-2xl">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          
          <div className={`absolute inset-0 ${slides[currentSlide].overlayColor} flex items-center justify-center`}>
            <div className="text-center text-white px-8 max-w-lg animate-fade-in">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-sm md:text-base mb-4 leading-relaxed drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
              <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-5 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                {slides[currentSlide].buttonText}
              </button>
            </div>
          </div>
        </div>

   
        <div className="relative w-1/4 h-full overflow-hidden rounded-r-[16px] shadow-lg">
          <img
            src={slides[getSlideIndex(1)].image}
            alt="Next slide"
            className="w-full h-full object-cover opacity-75 hover:opacity-90 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>


      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight size={24} />
      </button>

     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;