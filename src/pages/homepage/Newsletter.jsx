import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="w-full bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
   
          <div className="bg-[#CA6C38] px-6 py-8 rounded-2xl md:px-16 ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
       
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Get 10% OFF on Your First Order!
                </h3>
                <span className="text-orange-100 text-sm md:text-base">
                  <div>Join our mailing list for exclusive discounts, product drops,</div>
                  <span>and sweet surprises!</span>
                </span>
              </div>

              <div className="w-full md:w-auto md:min-w-80 ">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email Address"
                    className="w-full h-[39px] px-4 py-3 rounded-md border-1 text-white placeholder-white focus:ring-2 focus:ring-orange-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full h-[51px] bg-white text-[#CA6C38]  gap-2 font-bold p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                  >
                    Subscribe Now
                  </button> 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Newsletter;