import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
// import {useParams} from 'react-router-dom'

import "./productAction.css";

// import { addCart } from '../../../Redux/reducer/cartReducer/cartReducer' dispatch(addCart(id),;
import { addToCart } from '../../../Redux/reducer/cartReducer/cartReducer';
import { payPaytm } from '../../../Service/api';
import { post } from '../../../utils/paytm';

const ProductImageAction = (props) => {
    // const{id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => 
    { 
        setShow(false); 
        navigate('/cart') 
    };

    const handleShow = () => setShow(true);

    const addCart = () => {
        dispatch(addToCart(props.detail))
        handleShow()
    }

    const buyNow = () => {
        let response = payPaytm({amount: 500, email: 'nish@gmail.com'});
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return (
        <div className='productImageAction p-4'>
            <div className='product-detail-img p-4 border mb-2'>
                <img className='big-product-image' src={props.image} alt='product' />
            </div>
            <div className='product-btn d-flex justify-content-around'>
                <Button className='cart-btn' variant="primary" onClick={() => addCart()}><i class="fa-solid fa-cart-shopping"></i> Add to Cart</Button>
                <Button className='buy-btn' variant="primary" ><i class="fa-solid fa-truck-fast"></i> Buy Now</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Item added to cart</Modal.Title>
                </Modal.Header>
            </Modal>
        </div>
    )
}

export default ProductImageAction