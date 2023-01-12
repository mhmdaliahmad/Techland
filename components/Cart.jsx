import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import { AiOutlineLeft } from 'react-icons/ai';


const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft className='exit' />
        </button>   
             <Link href={`../Electronics`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        Electronics
        </button>
        </Link>

        <Link href={`../Apple-Products`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        Apple Products
        </button>
        </Link>     
             <Link href={`../Tabs&Warrables`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        warrables & tabs
        </button>
        </Link>   
              <Link href={`../Pods&Earphones`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        Pods & Earphones
        </button>
        </Link>

             <Link href={`../Headphones&Speakers`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        Headphones & Speakers
        </button>
        </Link>
        <Link href={`../Covers&Accessories`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        Covers, accessories & more
        </button>
        </Link>

        <Link href={`../Pc&Laptop`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        Pc & Laptop parts & accessories
        </button>
        </Link>
        <Link href={`../Chargers&Cables`}>
          <button className='cart-btn' onClick={() => setShowCart(false)}>
        Chargers, cables & connectors
        </button>
        </Link>








      </div>
    </div>
  )
}

export default Cart