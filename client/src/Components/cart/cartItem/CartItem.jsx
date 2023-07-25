import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./cartitem.css"
import { addItemQuantity, removeItemCart, subItemQuantity } from '../../../Redux/reducer/cartReducer/cartReducer';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {

    const dispatch = useDispatch()

    return (
        <Card className='mb-2'>
            <Card.Body className='d-flex product-image-detail-sect'>
                <div className='image-quantity text-center d-flex flex-column justify-content-around'>
                    <div className='img'>
                        <img src={props.image} alt='product' />
                    </div>
                    <div className='qty-btn'>
                        <ButtonGroup className='w-50'>
                            <Button variant="secondary" onClick={() => dispatch(subItemQuantity(props.id))}>-</Button>
                            <Button variant="secondary">{props.quantity}</Button>
                            <Button variant="secondary" onClick={() => dispatch(addItemQuantity(props.id))}>+</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className='product-details-sect p-4 position-relative'>
                    <h4>{props.longTitle}</h4>
                    <div className='price-details d-flex justify-content-around align-items-center w-75'>
                        <strike>Mrp: ₹{props.mrp * props.quantity}</strike>
                        <p className='mb-0 fw-bold fs-5'>Cost: ₹{props.cost * props.quantity}</p>
                        <p className='mb-0' style={{color : "green"}}>{props.dicount} Off</p>
                    </div>
                    <Button className='remove-btn position-absolute' onClick={() => dispatch(removeItemCart(props.id))} variant="danger"><i class="fa-solid fa-trash"></i></Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CartItem