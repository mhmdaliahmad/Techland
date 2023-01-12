import React from 'react';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai';

import {Cart} from './';
import { useStateContext } from '../context/StateContext';
import { useState } from 'react';

const Navbar = () => {
  const{showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCM4xSWEaWX-upJincrbKCijTig8Du3KTOruvqrCulrL1GQCh0_vJq15AJNarI-s2pQ&usqp=CAU' className='logo'/>
        </Link>
      </p>
      <button type='button' className="cart-icon" onClick={() => 
      setShowCart(true)}>
        <AiOutlineMenu/>
      </button>

{      showCart && <Cart/>
}    </div>
  )
}

export default Navbar