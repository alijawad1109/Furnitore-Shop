import React, { useState } from 'react'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/ui/CommonSection'
import { FaSearch } from "react-icons/fa";
import '../style/shop.css'
import ProductsList from '../components/ui/ProductList'
import products from '../assets/data/products';
const Shop = () => {
  const [productsData,setProductsData] =useState(products)

  const handleFilter= (e) =>{
    const filterValue= e.target.value;
    if(filterValue == 'sofa'){
      const filterProducts= products.filter(item => item.category == 'sofa')
      setProductsData(filterProducts)
    }
    if(filterValue == 'mobile'){
      const filterProducts= products.filter(item => item.category == 'mobile')
      setProductsData(filterProducts)
    }
    if(filterValue == 'watch'){
      const filterProducts= products.filter(item => item.category == 'watch')
      setProductsData(filterProducts)
    }
    if(filterValue == 'wireless'){
      const filterProducts= products.filter(item => item.category == 'wireless')
      setProductsData(filterProducts)
    }
    if(filterValue == 'chair'){
      const filterProducts= products.filter(item => item.category == 'chair')
      setProductsData(filterProducts)
    }
  }
  const handleSearch= (e) =>{
    const serachTerm = e.target.value;
    const searchProducts= products.filter(item=> item.productName.toLowerCase().includes(serachTerm.toLowerCase()))
    setProductsData(searchProducts)
  }
  return (
    <Helmet title='Shop'>
    <CommonSection title="Products"/>
    <section>
      <div className='flex justify-between flex-wrap w-[80%]'>
        <div className='1'>
          <div className='filter__wadget'>
            <select onChange={handleFilter}>
            <option>Filter by Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>
        </div>
        <div className='2'>
        <div className='filter__wadget md:mt-0 mt-5'>
          <select>
          <option>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        </div>
        <div className='3 lg:mt-0 mt-5 lg:w-[40%] w-full border-[1px] border-black p-1 rounded-md'>
        <div className='search__box flex items-center justify-between'>
          <input type="text" placeholder="Search..." className='border-none outline-none' onChange={handleSearch}/>
          <FaSearch  size={20}/>
        </div>
        </div>
      </div>
    </section>
    <section className='pt-0'>
      <div>
        {
          productsData == 0 ? (<h1 className='text-center'>No Products found!</h1>) : (
            <ProductsList data={productsData}/>
          )
        }
      </div>
    </section>
    </Helmet>
  )
}

export default Shop
