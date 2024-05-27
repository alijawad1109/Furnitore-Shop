import React, { useEffect, useState } from "react";
import Helmet from "../components/helmet/Helmet";
import { Container} from "reactstrap";
import '../style/Home.css'
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Services from "../services/Services";
import ProductList from "../components/ui/ProductList";
import counterImg from '../assets/images/counter-timer-img.png'
import products from '../assets/data/products'
import Clock from "../components/ui/Clock";
const Home = () => {
  const [trendingProducts,setTrendingProducts] =useState([])
  const [bestSalesProducts,setBestSalesProducts] =useState([])
  const [mobileProducts,setMobileProducts] =useState([])
  const [wiredProducts,setWiredProducts] =useState([])
  const [popularProducts,setPopularProducts] =useState([])
  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingObjects =products.filter(item => item.category === 'chair')
    const filteredBestSalesObjects =products.filter(item => item.category === 'sofa')
    const filteredMobileObjects =products.filter(item => item.category === 'mobile')
    const filteredWiredObjects =products.filter(item => item.category === 'wireless')
    const filteredPopularObjects =products.filter(item => item.category === 'watch')
    setTrendingProducts(filteredTrendingObjects)
    setBestSalesProducts(filteredBestSalesObjects)
    setMobileProducts(filteredMobileObjects)
    setWiredProducts(filteredWiredObjects)
    setPopularProducts(filteredPopularObjects)
  },[])
  return (
    <div>
      <Helmet title={"Home"}>
        <section className="hero__section p-20">
          <Container>
            <div className="w-full flex-wrap flex justify-between md:flex-nowrap">
                  <div className="lg:w-[50%] w-full">
                    <p className="hero__subtitle">Trending Product in {year}</p>
                    <h2 className="text-xl md:text-2xl">Make your interior More Minimalistic & Modern</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolore vel nisi fugit rem veritatis velit neque tempora
                      quisquam voluptatum debitis.
                    </p>
                    <motion.button whileTap={{scale:1.2}} className="buy__btn mt-[30px]"><Link to='shop'>Shop Now</Link></motion.button>
                  </div>
                <div className="">
                  <img src={heroImg} alt="" />
                </div>
            </div>
          </Container>
        </section>
      <Services/>
      <div className="trending__products">
        <div>
          <div className="text-center">
            <h1 className="section__title">Trending Products</h1>
          </div>
          <ProductList data={trendingProducts}/>
        </div>
      </div>
      <section className="best__sales">
          <div>
            <div className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </div>
            <ProductList data={bestSalesProducts}/>
          </div>
        </section>
        <section className="timer__count">
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col items-center justify-center md:w-[50%] w-[100%]">
            <div className="clock__top-content flex flex-col items-center">
              <h4 className="text-white mb-2 text-3xl">Limited Offer</h4>
              <h3 className="text-white mb-3 text-lg">Quailty Armacher</h3>
            </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
            </div>
            <div className="lg:flex lg:justify-end justify-center hidden">
              <img src={counterImg} alt="" className="timer_img"/>
            </div>
          </div>
        </section>
        <section className="new__arrivals">
          <div className="text-center">
          <h2 className="section__title">New Arrivals</h2>
          </div>
          <ProductList data={mobileProducts}/>
          <div className="mt-[-100px]">
          <ProductList data={wiredProducts}/>
          </div>
        </section>
        <section className="popular__category">
        <div className="text-center mb-5 mt-[-130px]">
          <h2 className="section__title">Popular in Category</h2>
          </div>
          <ProductList data={popularProducts}/>
        </section>
      </Helmet>
    </div>
  );
};

export default Home;
