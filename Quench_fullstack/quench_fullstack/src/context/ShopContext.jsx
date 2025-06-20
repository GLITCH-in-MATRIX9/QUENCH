import { products } from "../assets/frontend_assets/assets.js"
import { createContext } from 'react';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '₹';
  const delivery_fee = 50;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartItems] = useState({});


  const addToCart = async (itemId, size) => {

    if(!size){
      toast.error('Please select a size before adding to cart.',{
        toastId: `select-size-${itemId}`,
      });

      return;
    }
    



    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }

    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error in getCartCount:", error);
        }
      }
    }
    return totalCount;
  };


  const updateQuantity=async (itemId,size,quantity)=>{
    let cartData= structuredClone(cartItems);
    cartData[itemId][size]=quantity;
    setCartItems(cartData);
  }



  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,addToCart,
    setCartItems,
    getCartCount,
    updateQuantity
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
