import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CartItem from './cartItem/CartItem';
import CartBalance from './cartBalance/CartBalance';


import "./cart.css"
import EmptyCart from './emptyCart/EmptyCart';
const Cart = (props) => {
  const { cart } = useSelector((state) => state.cart)
  return (
    <div className='cart m-auto'>
      {
        cart.length > 0 ? (
          <div className='cart-section d-flex justify-content-between'>
            <div className='cartItems p-2'>
              {cart.map((cartitem) => {
                return (
                  <CartItem id={cartitem.id} image={cartitem.url} longTitle={cartitem.title.longTitle} mrp={cartitem.price.mrp} cost={cartitem.price.cost} quantity={cartitem.quantity} dicount={cartitem.price.discount} />
                )
              })}
            </div>
            <div className='cart-balance'>
              <CartBalance />
            </div>
          </div> )
          : (
          <div className='empty-div'>
            <EmptyCart />
          </div> )
      }
    </div>
  )
}

export default Cart