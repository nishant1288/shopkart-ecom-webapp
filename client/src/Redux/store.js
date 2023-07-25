import {configureStore} from '@reduxjs/toolkit';
import  getProductsReducer  from './reducer/productReducer/productReducer';
import getProductDetailsReducer  from './reducer/productReducer/productDetailReducer';
import cartItemReducer from './reducer/cartReducer/cartReducer';

const store = configureStore(
    {
        reducer : {
            products : getProductsReducer,
            productDetails : getProductDetailsReducer,
            cart: cartItemReducer
        }
    }
)

export default store;