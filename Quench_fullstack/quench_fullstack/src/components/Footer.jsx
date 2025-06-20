import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          <div>
            <img src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi perspiciatis quibusdam reprehenderit quia possimus veritatis ad quam voluptatum rerum voluptatem!
            </p>

          </div>

          <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8130035736</li>
                <li>anjali95912@yahoo.com</li>
                
            </ul>
          </div>

          



        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2025@ Quench.com- All Rights Reserved</p>
          </div>
      
    </div>
  )
}

export default Footer
