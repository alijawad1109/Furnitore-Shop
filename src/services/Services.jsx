import React from "react";
import "./Services.css";
import { RiTruckLine } from "react-icons/ri";
import { RiLoader3Fill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiExchangeDollarFill } from "react-icons/ri";
import {motion} from 'framer-motion'
const Services = () => {
  return (
    <section className="services lg:m-0 w-full">
      <div className="flex flex-wrap">
        <motion.div whileHover={{scale:1.1}} className="service__item lg:w-[23%] w-[100%]">
          <span>
            <RiTruckLine size={20} />
          </span>
          <div>
            <h3>Free Shipping</h3>
            <p>Lorem ipsum dolor slit.</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="service__item lg:w-[23%] w-[100%]" style={{backgroundColor:"#ceebe9"}}>
          <span>
            <RiLoader3Fill  size={20} />
          </span>
          <div>
            <h3>Easy Returns</h3>
            <p>Lorem ipsum dolor slit.</p>
          </div>
        </motion.div>
        <motion.div  whileHover={{scale:1.1}} className="service__item lg:w-[23%] w-[100%]" style={{backgroundColor:"#e2f2b2"}}>
          <span>
            <RiSecurePaymentLine  size={20} />
          </span>
          <div>
            <h3>Secure Payment</h3>
            <p>Lorem ipsum dolor slit.</p>
          </div>
        </motion.div>
        <motion.div  whileHover={{scale:1.1}} className="service__item lg:w-[23%] w-[100%]"  style={{backgroundColor:"#d6e5fb"}}>
          <span>
            <RiExchangeDollarFill  size={24} />
          </span>
          <div>
            <h3>Back Guarantee</h3>
            <p>Lorem ipsum dolor slit.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
