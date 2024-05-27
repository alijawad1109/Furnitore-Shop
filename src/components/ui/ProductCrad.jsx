import React from "react";
import "../../style/ProductCard.css";
import { IoIosAdd } from "react-icons/io";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/CartSlice";
import {toast } from 'react-toastify';

const ProductCrad = ({item}) => {

  const dispatch= useDispatch()

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id:item.id,
      productName:item.productName,
      price:item.price,
      imgUrl:item.imgUrl
    }))
    toast.success("product added successfuly!")
  }
  return (
    <div  className="lg:w-60 xxl:w-[200px] md:w-[200px] mb-1">
            <div className="product__item">
      <motion.div whileHover={{scale:1.1}} className="product__img">
        <img src={item.imgUrl} alt="" className="h-[50%] lg:h-[100%]" />
      </motion.div>
      <div className="p-2 product__info">
      <h3 className="product__name font-semibold text-lg"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
      <span>{item.category}</span>
      </div>
      <div className="product__card-bottom flex justify-between items-center p-2">
        <span className="price">${item.price}</span>
        <motion.span whileTap={{scale:1.2}} className="icon" onClick={addToCart}><IoIosAdd  size={20}/></motion.span>
      </div>
    </div>
    </div>
  );
};

export default ProductCrad;
