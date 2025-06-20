import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    // Assuming you want to display the product details

    const {currency}=useContext(ShopContext)

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
        <h2 className='pt-3 pb-1 text-sm'>{name}</h2>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
