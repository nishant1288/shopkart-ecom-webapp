import React from 'react';
import "./emptycart.css"

const EmptyCart = () => {
    return (
        <div className='empty-cart'>
            <div className='empty-cart-img'>
                <img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='emptycart' />
            </div>
            <div className='empty-cart-text'>
                <h3>Missing Cart Items ?</h3>
                <p>GO SHOP NOW !</p>
            </div>
        </div>
    )
}

export default EmptyCart