import React, { useEffect, useRef, useState } from 'react'
import Helmet from '../components/helmet/Helmet'
import {  useParams } from 'react-router-dom'
import products from '../assets/data/products';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import '../style/product-details.css'
import {motion} from 'framer-motion'
import ProductList from '../components/ui/ProductList'
import CommonSection from '../components/ui/CommonSection';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';
const ProductDetails = () => {
  const [tab,setTab]=useState('desc')
  const {id} =useParams();
  const product= products.find((item)=>item.id == id);
  const {imgUrl,productName,price,avgRating,review,description,shortDesc,category}= product
  const [rating,setRating]=useState(null)
  const relatedProducts= products.filter((item)=>item.category === category)
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
  const dispatch =useDispatch()
  const submitHandler =(e) =>{
    e.preventDefault();
    const reviewUseName=reviewUser.current.value
    const reviewUserMsg= reviewMsg.current.value

    const reviewObj= {
      userName:reviewUseName,
      text:reviewUserMsg,
      rating
    }
    console.log(reviewObj)
    toast.success("Review Submitted")
  }
  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      img:imgUrl,
      productName,
      price,
    }))
    toast.success("Product added successfully!")
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])
  return (
    <Helmet title={productName}>
        <CommonSection title={productName}/>
    <section className='pt-0 w-[90%] m-0 m-auto'>
      <div className='flex flex-wrap gap-1'>
        <div  className='lg:w-[40%] w-full'>
          <img src={imgUrl} alt=""/>
        </div>
        <div className='product_details lg:w-[40%] w-full'>
          <h2 className='font-semibold mt-2'>{productName}</h2>
          <div className='productRating mt-2'>
            <div className='flex'>
              <span>
              <FaStar size={20}/>
              </span>
              <span>
              <FaStar size={20}/>
              </span>
              <span>
              <FaStar size={20}/>
              </span>
              <span>
              <FaStar size={20}/>
              </span>
              <span>
              <FaStarHalfAlt  size={20}/>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p>( <span >{avgRating}</span>ratings)</p>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
          <p className='text-2xl text-black font-semibold mt-1'>${price}</p>
          <p className='text-xl flex'><p className='font-semibold text-xl'>Category:</p> {category}</p>
          </div>
          <div>

          <p className='m-2'>{shortDesc}</p>
          </div>
          <motion.button whileTap={{scale:1.2}} className='buy__btn mt-2' onClick={addToCart}>Add To Cart</motion.button>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div className='tab__wrapper flex items-center gap-5 cursor-pointer'>
          <h6 className={`${tab == 'desc' ? "active__tab" : "" }`} onClick={()=> setTab('desc')}>Description</h6>
          <h6 className={`${tab == 'rev' ? "active__tab" : "" }`} onClick={()=> setTab('rev')}>Reviews({review})</h6>
        </div>
        {
          tab === 'desc'  ? (        <div className='tab__content mt-5'>
          <p>{description}</p>
        </div>):(
          <div className='product__review mt-5'>
            <div className="review__wrapper">
              <ul>
                {
                  review?.map((item,index)=>{
                    <li key={index}>
                    <h6>John</h6>
                    <span>{item.rating}</span>
                    <p>{item.text}</p>
                    </li>
                  })
                }
              </ul>
              <div className="review__from">
              <h4>Leave Your Expereince</h4>
                <form action="" onSubmit={submitHandler}>
                  <div className="form__group mt-3">
                    <input type="text" placeholder='Enter Name...' ref={reviewUser} required />
                  </div>
                  <div className="form__group  mt-3 items-center flex gap-5">
                  <motion.span whileTap={{scale:1.2}} className='flex flex-col items-center' onClick={()=>setRating(1)}>
                  1
                  <FaStar size={20}/>
                  </motion.span>
                  <motion.span whileTap={{scale:1.2}} className='flex flex-col items-center' onClick={()=>setRating(2)}>
                  2
                  <FaStar size={20}/>
                  </motion.span>
                  <motion.span whileTap={{scale:1.2}} className='flex flex-col items-center' onClick={()=>setRating(3)}>
                  3
                  <FaStar size={20}/>
                  </motion.span>
                  <motion.span whileTap={{scale:1.2}} className='flex flex-col items-center' onClick={()=>setRating(4)}>
                  4
                  <FaStar size={20}/>
                  </motion.span>
                  <motion.span whileTap={{scale:1.2}}  className='flex flex-col items-center' onClick={()=>setRating(5)}>
                  5
                  <FaStar size={20}/>
                  </motion.span>
                  </div>
                  <div className="form__group">
                    <textarea type="text" placeholder='Review Message....' rows={5}  className='mt-3 mb-3 w-full' ref={reviewMsg} required/>
                  </div>
                  <button className='buy__btn' type='submit'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        )
        }

      </div>
      <div>
        <h2 className='related__products text-xl text-center font-semibold mt-5'>You might also likes</h2>
        <ProductList data={relatedProducts}/>
      </div>
    </section>
    </Helmet>
  )
}

export default ProductDetails
