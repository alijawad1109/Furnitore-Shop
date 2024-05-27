import React from 'react'
import ProductCrad from './ProductCrad'

const ProductList = ({data}) => {
  return (
    <>
    <section>
    <div className='flex gap-2 justify-between overflow-hidden items-center flex-wrap'>
    {
        data?.map((item,index) =>(

    <ProductCrad item={item} key={index}/>
        ))
    }
    </div> 
    </section>
    </>
  )
}

export default ProductList
