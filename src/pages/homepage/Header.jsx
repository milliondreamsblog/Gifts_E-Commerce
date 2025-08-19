import logo from '../../assets/logo.png'
import React from 'react';
// import MenuIcon from '../../assets/assets/menu.svg' // You'll need this for the mobile menu
import { FaBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Menu } from 'lucide-react'; // Using a popular icon library for the menu icon

export const Header = () => {
  // In a real app, you would use state to toggle the mobile menu
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className='sticky top-0 bg-white z-20 border-b border-gray-200'>
      {/* Top Announcement Bar */}
      <div className="flex justify-center items-center p-2 bg-[#A21114] text-white h-8 text-sm">
        <p className='text-white/90'>Enjoy Flat 10% off on orders above ₹2500</p>
      </div>

      {/* Main Header */}
      <div className='py-2'>
        {/* Use a standard container with valid padding */}
        <div className='container mx-auto px-4'>
          <div className='flex items-center pl-16 justify-between'>
            <img src={logo} alt="EHM logo" className="h-20 w-auto" />

            {/* Desktop Navigation */}
            <nav className='hidden pr-16 pl-16 md:flex gap-6 text-black items-center text-sm font-medium'>
              <a href="#" className="hover:text-[#A21114]"> Home </a>
              <a href="#" className="hover:text-[#A21114]"> About Us </a>
              <a href="#" className="hover:text-[#A21114]"> Contact </a>
              <div className='relative'>
                <CiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  type="search"
                  placeholder="Search"
                  className="h-10 w-64 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A21114]/50"
                />
              </div>
              <FaBell className="h-6 w-6 cursor-pointer hover:text-[#A21114]" />
              <button className='text-[#A21114]   border border-[#A21114] px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center tracking-tight hover:bg-[#A21114]/5'>
                Login/Signup
              </button>
            </nav>

            <div className='md:hidden'>
              <button /* onClick={() => setIsMenuOpen(!isMenuOpen)} */>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
    </header>
  );
};