import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./cartBalance.css";
import { useSelector } from 'react-redux'

const CartBalance = () => {
  const { cart } = useSelector((state) => state.cart);
  const [cost, setCost] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    getBalance()
  }, [cart])

  const getBalance = () => {
    let cost = 0;
    let mrp = 0;
    let discount = 0;
    cart.map((cartitem) => {
      cost = cost + (cartitem.price.cost * cartitem.quantity);
      mrp = mrp + (cartitem.price.mrp * cartitem.quantity);
      discount = mrp - cost;
    })
    setCost(cost);
    setMrp(mrp);
    setDiscount(discount);
  }

  return (
    <div className='cartBalance'>
      <Card>
        <Card.Body>
          <Card.Title>Price Details</Card.Title><hr></hr>
          <Card.Text className='price-detail-text'>
            <p>Price({cart.length} items) <span className=''>₹{mrp}</span></p>
            <p>Discount <span style={{ color: 'green' }}>-{discount}</span></p>
            <p>Delivery Charges <span style={{ color: 'green' }}>Free</span></p> <hr></hr>
            <h5>Total Amount <span>₹{cost}</span></h5><hr></hr>
            <p className='end-text'>You will save ₹{discount} on this order</p>
          </Card.Text>
          <div className='payment-section d-flex'>
            <Button variant="primary" className='cart-pay-btn m-auto'>Proceed to Pay</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CartBalance