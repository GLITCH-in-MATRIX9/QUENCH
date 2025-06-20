import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useEffect, useState } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ category, subcategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subcategory === item.subcategory);

            setRelated(productsCopy.slice(0, 4));


        }
    }, [products])


    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'Related'} text2={'Products'} />

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 sm:px-10'>
                {related.map((item) => (
                    <Link to={`/product/${item._id}`} className='no-underline text-black' key={item._id}>
                        <div className='rounded-lg p-2 hover:shadow-lg transition-shadow duration-200'>
                            <img src={item.image[0]} alt={item.name} className='w-full h-40 object-cover rounded mb-4' />
                            <h2 className='text-lg font-semibold'>{item.name}</h2>
                            <p className='text-gray-600 mt-1'>${item.price}</p>
                        </div>
                    </Link>
                ))}


            </div>



        </div>
    )
}

export default RelatedProducts
