import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './navbar/Navbar';
import CarouselItem from './carousel/Carousel';
import { fetchProducts } from '../../Redux/reducer/productReducer/productReducer';
import ProductSlide from './productSlide/ProductSlide';
import ProductAd from './productAdSlide/ProductAd';
import ThreeBanner from './threeBanner/ThreeBanner';


const Home = () => {

  const products = useSelector((state) => state.products);
  const allProducts = products.products;
 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <>

      {/* {products.loading && <div>Loading</div>}
      {!products.loading && products.error ? <div>{products.error}</div> : null}
      {!products.loading && products.products.length ? (<ul>

        {products.products.map((product) => {
          return (
            <li key={product.id}>{product.id}</li>
          )
        })}
      </ul> ): null} */}

      <Navbar />
      <CarouselItem />
      <ProductAd setProducts={allProducts} title='Top Offers'/>
      <ThreeBanner />
      <ProductSlide setProducts = {allProducts} title='Special Deals' />
    </>
  )
}

export default Home