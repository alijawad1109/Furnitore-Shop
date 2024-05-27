import React from 'react';
import logo from '../../assets/images/eco-logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";
const Footer = () => {
  const year =new Date().getFullYear();
  return (
    <div className='footer  items-center '>
    <div className='flex gap-5 justify-between flex-wrap'>
      <div className='flex flex-col items-center'>
        <div className='logo ml-[-50px]'>
          <img src={logo} alt="" />
          <div>
            <h1 className='lorsis'>Aj Styles</h1>
          </div>
        </div>
        <p className='footer_text mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur veniam ad sapiente magnam, eaque tempora, reiciendis commodi alias .</p>
      </div>
      <div className=''>
        <div className='footer__quick-links flex flex-col'>
          <h4 className="footer__quick-title text-2xl font-bold text-center mb-2">
            Top Categories
          </h4>
          <ul className='flex flex-col gap-3 '>
            <li><Link to='#'>Mobile Phones</Link></li>
            <li><Link to='#'>Mobile Sofa</Link></li>
            <li><Link to='#'>Arm Chair</Link></li>
            <li><Link to='#'>Smart Watches</Link></li>
          </ul>
        </div>
      </div>
      <div className='lolo'>
        <div className='footer__quick-links flex flex-col'>
          <h4 className="footer__quick-title text-2xl font-bold text-center mb-2">
           Useful Links
          </h4>
          <ul className='flex flex-col gap-3'>
            <li><Link to='/'>Shop</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='#'>Smart Watches</Link></li>
          </ul>
        </div>
      </div>
      <div className='lolo'>
        <div className='footer__quick-links flex flex-col'>
          <h4 className="footer__quick-title text-2xl font-bold mb-2">
           Contact
          </h4>
          <ul className='flex flex-col gap-3 '>
            <li>
            <CiLocationOn  size={20}/>
            <p className='w-[280px]'>
            Sethi Estate,  Lahore, Pakistan
            </p>
            </li>
            <li>
            <CiPhone size={20}/>
            <p>+92 3164944176</p>
            </li>
            <li>
            <MdForwardToInbox size={20}/>
            <p>example@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer__copywright'>
      Copywright {year} developed by Aj Styles
    </div>
    </div>
  )
}

export default Footer
