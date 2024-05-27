import React, { useEffect, useRef } from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import userIcon from "../../assets/images/user-icon.png";
import { RxHamburgerMenu } from "react-icons/rx";
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";
const nav__link =[{
  path:'home',
  display:'Home'
},{
  path:'shop',
  display:'Shop'
},{
  path:'cart',
  display:'Cart'
},
]
const Header = () => {
  const totalQuantity = useSelector(state =>state.cart.totalQuantity)
  const headerRef= useRef(null);
  const menuRef =useRef(null)
  const stickyHeaderFunction = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  const navigate= useNavigate()
  useEffect(()=>{
    stickyHeaderFunction();

    return ()=> window.removeEventListener("scroll", stickyHeaderFunction)
  },[])
  const navigateToCart = () =>{
    navigate('/cart')
  }
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  return (
    <>
    <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper">
              <div className="logo">
                <img src={logo} alt="" />
                <div>
                  <h1 className="cursor-pointer">Aj Styles</h1>
                </div>
              </div>
              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {
                    nav__link.map((item ,index)=>(
                      <li className="nav__item" key={index}>
                        <NavLink to={item.path} className={(navClass) =>navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="nav__icons">
                <span className="fav__icon">
                  <CiHeart size={24} />
                  <span className="badge">1</span>
                </span>
                <span className="cart__icon cursor-pointer">
                  <FiShoppingCart size={24} onClick={navigateToCart}/>
                  <span className="badge">{totalQuantity}</span>
                </span>
                <span className="user">
                  <motion.img whileTap={{scale:1.2}} src={userIcon} alt="" className="user__img" />
                </span>
                <div className="mobile__menu">
                <span>
                  <RxHamburgerMenu size={20}  onClick={menuToggle}/>
                </span>
              </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
