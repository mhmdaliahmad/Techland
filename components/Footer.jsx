import React from 'react';
import { AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>@2022 TechLand All rights reserved</p>
      <a  href='https://www.instagram.com/techlandleb/'>
        <AiFillInstagram className='footer-icons'/> @techlandleb
      </a>
      <a href='https://wa.me/96176087078'>
        <AiOutlineWhatsApp className='footer-icons'/>+961 76 087 078

      </a>
    </div>
  )
}

export default Footer