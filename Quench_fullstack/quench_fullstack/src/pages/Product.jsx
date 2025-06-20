import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, cartItems, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
     window.scrollTo({
       top: 0,
       behavior: 'smooth',
     });

  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 px-4 sm:px-10'>
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* LEFT SIDE: Thumbnails + Big Image */}
        <div className='flex w-full lg:w-[60%] gap-6'>
          {/* Thumbnails column */}
          <div className='flex flex-col gap-3 overflow-x-hidden max-h-[400px]'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className='w-16 h-16 object-cover cursor-pointer rounded hover:scale-105 transition duration-200'
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main product image */}
          <div className='flex-1'>
            <img
              className='w-full h-auto rounded-lg shadow max-h-[500px] object-contain'
              src={image}
              alt='Main Product'
            />
          </div>
        </div>

        {/* RIGHT SIDE: Product Info */}
        <div className='flex-1'>
          <h1 className='font-semibold text-2xl'>{productData.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-4 h-4' />
            <img src={assets.star_icon} alt="" className='w-4 h-4' />
            <img src={assets.star_icon} alt="" className='w-4 h-4' />
            <img src={assets.star_icon} alt="" className='w-4 h-4' />
            <img src={assets.star_dull_icon} alt="" className='w-4 h-4' />
            <p className='pl-'>(122)</p>
          </div>

          <p className='mt-4 text-gray-700'>{productData.description}</p>
          <p className='mt-2 font-bold text-xl'>{currency}{productData.price}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-3'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border cursor-pointer border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition duration-100 ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className='flex-1 flex-col gap-4'>
            <button onClick={()=>addToCart(productData._id,size)}className='bg-black text-white px-8 py-3 rounded hover:bg-orange-600 transition duration-200 cursor-pointer'>
              Add to Cart
            </button>
            <hr className='mt-8 sm:w-4/5 border-gray-300' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>Free shipping on orders over {currency}50</p>
              <p>30-day return policy</p>
              <p>Secure payment processing</p>

            </div>
          </div>
        </div>
        
      </div>
      {/* review section */}
        <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>reviews(122)</p>


          </div>
          <div className='flex flex-col gap-4 border px-2 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam ullam laborum quaerat, error ipsam doloremque ipsa! In consectetur cum, voluptate aut enim amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla ipsa rerum, culpa suscipit, neque odit hic possimus beatae mollitia esse. Aut, repudiandae fugiat.
            </p>
          </div>
        </div>

        {/* Display latest products */}
        <RelatedProducts category={productData.category} subcategory={productData.subcategory} />

    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
