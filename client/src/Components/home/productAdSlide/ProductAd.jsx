import React from 'react'
import ProductSlide from '../productSlide/ProductSlide'
import "./productAd.css";
import { adData } from '../../../Constants/data';

const ProductAd = (props) => {
  return (
    <div className='product-ad-slide d-flex justify-content-between m-auto'>
      <div className='left-banner'>
        <ProductSlide title={props.title} setProducts={props.setProducts} />
      </div>
      <div className='side-banner mt-4'>
        <img src={adData} alt='banner' />
      </div>
    </div>
  )
}

export default ProductAd