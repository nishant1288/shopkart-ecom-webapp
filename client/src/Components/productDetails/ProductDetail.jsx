import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getProductDetails } from '../../Redux/reducer/productReducer/productDetailReducer';
import ProductImageAction from './productImageAction/ProductImageAction';

import "./productDetail.css"
import ProductSlide from '../home/productSlide/ProductSlide';

const ProductDetail = () => {

  const dispatch = useDispatch();
  let { id } = useParams();
  const { loading, productDetail } = useSelector((state) => state.productDetails);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (productDetail && id !== productDetail.id) {
      dispatch(getProductDetails(id))
    }

  }, [dispatch, loading, id, productDetail])



  return (

    <>
      {!loading ? 
      <div>
        <div className='product mt-2'>
          <Link to={'/'} className='back-sect'><p className='back mb-0'><i class="fa-solid fa-left-long ms-4"></i> Back</p></Link>
          <div className='product-detail-section d-flex '>

            <div className='product-image'>
              <ProductImageAction detail={productDetail} image={productDetail.detailUrl} />
            </div>

            <div className='product-detail p-4'>
              <h4 className='mb-4'>{productDetail.title.longTitle}</h4>
              <p className='price-heading'>Special Price</p>

              <div className='price d-flex justify-content-between align-items-center mb-4'>
                <p className='cost'>₹{productDetail.price.cost}</p>
                <strike className='mrp'>₹{productDetail.price.mrp}</strike>
                <p className='discount'>{productDetail.discount}</p>
              </div>

              <div className='offer mb-4'>
                <p><span><i class="fa-solid fa-tag"></i> Bank Offer:</span> 10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above</p>
                <p><span><i class="fa-solid fa-tag"></i> Partner Offer:</span> Sign-up for Shopkart Pay Later & get free Times Prime Benefits worth ₹10,000*</p>
                <p><span><i class="fa-solid fa-tag"></i> Partner Offer:</span> Apply & get ₹10,000 Times Prime benefits + ₹1,000 Gift Card* with Shopkart Axis Bank Credit Card</p>
                <p><span><i class="fa-solid fa-tag"></i> Bank Offer</span> Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999</p>
                <p><span><i class="fa-solid fa-tag"></i> Bank Offer</span> 5% off on Flipkart Axis Bank Credit Card and EMI Trxns, up to ₹750, on orders of ₹5,000 and above</p>
                <p><span><i class="fa-solid fa-tag"></i> Partner Offer</span> Extra 10% off on Men's shoes by PUMA, NIKE & More. Offer Auto Applied. T&C</p>
                <p><span><i class="fa-solid fa-tag"></i> Partner Offer</span> Purchase now & get 1 surprise cashback coupon in Future</p>
              </div>

              <p className='product-description'>
                {productDetail.description}
              </p>
            </div>

          </div>
        </div>
        <ProductSlide setProducts={products} />
      </div> : null}
    </>
  )
}

export default ProductDetail