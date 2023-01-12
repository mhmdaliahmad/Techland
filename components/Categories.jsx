import React from 'react';
import Link from 'next/link';
import { AiFillApple, AiFillCustomerService, AiFillTablet, AiFillThunderbolt, AiOutlineLaptop, AiOutlineMobile, AiTwotoneMobile } from 'react-icons/ai';
import { BsEarbuds } from "react-icons/bs";
import { RxMobile } from "react-icons/rx";import { MdCable } from "react-icons/md";

const Categories = () => {
  return (
    <div className='categories'>
             <Link href={`../Electronics`}>
        <div className='categories-card'>
            <AiFillThunderbolt className='categories-icon'/>
           <h3 className='categories-text'>Electronics</h3>
        </div>
      </Link>
      <Link href={`../Apple-Products`}>
        <div className='categories-card'>
            <AiFillApple className='categories-icon'/>
           <h3 className='categories-text'>Apple Products</h3>
        </div>
      </Link>
      <Link href={`../Tabs&Warrables`}>
        <div className='categories-card'>
            <AiFillTablet className='categories-icon'/>
           <h3 className='categories-text'>Warrables & Tabs</h3>
        </div>
      </Link>
      <Link href={`../Pods&Earphones`}>
        <div className='categories-card'>
            <BsEarbuds className='categories-icon'/>
           <h3 className='categories-text'>Pods & Earphones</h3>
        </div>
      </Link>
      <Link href={`../Headphones&Speakers`}>
        <div className='categories-card'>
            <AiFillCustomerService className='categories-icon'/>
           <h3 className='categories-text'>Headphones & Speakers</h3>
        </div>
      </Link>
      <Link href={`../Covers&Accessories`}>
        <div className='categories-card'>
            <RxMobile className='categories-icon'/>
           <h3 className='categories-text'>Covers, Accessories & more</h3>
        </div>
      </Link>
      <Link href={`../Pc&Laptop`}>
        <div className='categories-card'>
            <AiOutlineLaptop className='categories-icon' />
           <h3 className='categories-text'>Pc & Laptop parts & accessories</h3>
        </div>
      </Link>
      <Link href={`../Chargers&Cables`}>
        <div className='categories-card'>
            <MdCable className='categories-icon'/>
           <h3 className='categories-text'>Chargers, Cables & Connectors</h3>
        </div>
      </Link>
    </div>
  )
}

export default Categories