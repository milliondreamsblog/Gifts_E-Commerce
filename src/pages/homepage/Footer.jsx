import React from 'react';

// Using an object to hold footer link data makes it easy to manage
const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ],
  shop: [
    { name: 'Gift Sets', href: '#' },
    { name: 'Premium Cookies', href: '#' },
    { name: 'Hampers', href: '#' },
    { name: 'Custom Orders', href: '#' }
  ],
  support: [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Track Your Order', href: '#' },
    { name: 'Chat with Us', href: '#' }
  ]
};

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
        
          <div className="flex-shrink-0">
        
            <div className="mb-4">
         
              <div>
                <img src="src/assets/logo.png" alt='logo'></img>
              </div>
            </div>
            
            <p className="text-base font-semibold text-red-700 max-w-xs text-wrap">
              Crafted with love, delivered with sweetness.
            </p>
          </div>

      
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8">
        
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-900  ">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-gray-600 hover:text-red-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-900  ">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-gray-600 hover:text-red-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

   
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-900  ">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-gray-600 hover:text-red-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-900  ">Stay Connected</h4>
              <p className="text-base text-gray-600">
                Subscribe to get updates & offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;