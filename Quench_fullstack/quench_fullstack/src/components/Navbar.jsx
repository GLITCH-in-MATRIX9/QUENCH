import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets.js';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false); // lowercase state variable

  return (
    <div className='flex items-center justify-between py-5 font-medium bg-gray-100 relative px-4'>
      <img src={assets.logo} className='w-36' alt="logo" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div className='group-hover:block hidden absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link className='relative' to='/cart'>
          <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>

        {/* Hamburger icon for mobile */}
        <img onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 bottom-0 z-20 bg-white transition-all duration-300 ease-in-out ${visible ? 'w-3/4 px-6 py-4' : 'w-0 overflow-hidden'}`}>
        {visible && (
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            <NavLink to='/' onClick={() => setVisible(false)} className='py-2 text-sm border-b border-gray-200'>
              Home
            </NavLink>
            <NavLink to='/collection' onClick={() => setVisible(false)} className='py-2 text-sm border-b border-gray-200'>
              Collection
            </NavLink>
            <NavLink to='/about' onClick={() => setVisible(false)} className='py-2 text-sm border-b border-gray-200'>
              About
            </NavLink>
            <NavLink to='/contact' onClick={() => setVisible(false)} className='py-2 text-sm border-b border-gray-200'>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
