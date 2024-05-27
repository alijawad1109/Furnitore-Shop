import React from 'react'
import '../style/cart.css'
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
const Cart = () => {
  const cartItems= useSelector(state => state.cart.cartItems)
  const totalAmount= useSelector((state) => state.cart.totalAmount)
  return (
    <Helmet title="cart">
      <CommonSection title='Shopping Cart'/>
      <div className='flex flex-wrap justify-between' >
          <div className='font-semibold text-xl m-4 lg:w-[60%] w-[100%]'>
          {
            cartItems?.length === 0 ? (
              <div className='text-center'>No item added to the cart!</div>
            ) : (
              <>
              <ul className='flex justify-between mb-3'>
              <li>Image</li>
              <li>Title</li>
              <li>Price</li>
              <li>Qty</li>
              <li>Delete</li>
            </ul>
            <hr  className='h-[1px] bg-black  mb-3'/>
          <div>
          {
            cartItems?.map((item,index)=>(
              <ul className='flex justify-between mb-3' key={index}>
              <li><img src={item.imgUrl} alt="" className='w-[80px] h-[80px]'/></li>
              <li className='w-16 text-[12px] '>{item.productName}</li>
              <li>${item.price}</li>
              <li>{item.quantity}px</li>
              <motion.li whileTap={{scale:1.2}} className='cursor-pointer'><MdDelete size={20}/></motion.li>
            </ul>
            ))
          }
          
            <hr  className='h-[1px] bg-black  mb-3'/>
          </div>
              </>
            )
          }

          </div>
        <div>
        <div className='flex flex-col items-center mb-2  lg:w-[70%] w-[100%] gap-5'>
          <span className='mt-4 font-semibold'>Taxes, and shipping fees will be calculate on checkout</span>
          <motion.button whileTap={{scale:1.1}} className='buy__btn w-[90%]'><Link to='/cart'>Checkout</Link></motion.button>
          <motion.button  whileTap={{scale:1.1}} className='buy__btn w-[90%] mt-4'><Link to='/shop'>Continue Shopping</Link></motion.button>
      </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Cart
