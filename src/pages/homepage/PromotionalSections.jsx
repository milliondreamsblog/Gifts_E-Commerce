import React from 'react';

const promoCards = [
  { id: 1, title: 'UNBOX ELEGANCE', description: 'Handpicked luxury gifts...', imageUrl: 'src/assets/Promotional2.png' },
  { id: 2, title: 'CELEBRATE EVERYTHING', description: 'Birthdays, anniversaries...', imageUrl: 'src/assets/group5.png' },
  { id: 3, title: 'HOME & HEART', description: 'Cozy, calm, and personal...', imageUrl: 'src/assets/group2.png' },
  { id: 4, title: 'GIFTING MADE PERSONAL', description: 'Thoughtful bundles tailored...', imageUrl: 'src/assets/Promotion1.png' },
  { id: 5, title: 'ADD A PERSONAL TOUCH', description: 'Customizable notes, names...', imageUrl: 'src/assets/Group3.png' },
];

const PromotionalSections = () => {
  const getCardPlacement = (index) => {
    switch (index) {
      case 0: // UNBOX ELEGANCE
        return 'md:col-start-1 md:row-start-1 md:row-span-2';
      case 1: // CELEBRATE EVERYTHING
        return 'md:col-start-2 md:row-start-1 md:row-span-2';
      case 2: // HOME & HEART
        return 'md:col-start-3 md:row-start-1 md:row-span-3';
      case 3: // GIFTING MADE PERSONAL - CORRECTED
        return 'md:col-start-1 md:row-start-3 md:row-span-3 md:col-span-2';
      case 4: // ADD A PERSONAL TOUCH - CORRECTED
        return 'md:col-start-3 md:row-start-4 md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-4">
        {promoCards.map((card, index) => (
          <div
            key={card.id}
            className={`
              relative rounded-xl overflow-hidden min-h-[320px] 
              flex items-end p-6 text-white shadow-lg
              ${getCardPlacement(index)}
            `}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div> */}
            <div className="relative z-20">
              <h3 className="text-2xl font-bold uppercase">{card.title}</h3>
              <p className="text-sm mt-1 max-w-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionalSections;