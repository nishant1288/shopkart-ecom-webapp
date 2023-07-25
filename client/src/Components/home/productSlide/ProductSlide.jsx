import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import "react-multi-carousel/lib/styles.css";

import "./product-slide.css"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ProductSlide = (props) => {
    return (
        <div className='product-slide mt-4'>
            <div className='heading d-flex justify-content-between'>
                <h4 className='mb-4'>{props.title}</h4>
                <Button variant="primary" className='more-btn d-flex justify-content-center align-items-center'><i className="fa-solid fa-greater-than"></i></Button>
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                infinite={true}
                centerMode={true}
            >
                {props.setProducts.map((product) => {
                    return (
                        <Link className='product-link' to={`/product/${product.id}`}>
                            <div className='product-details text-center d-flex flex-column justify-content-center align-items-center'>
                                <img src={product.url} alt='product'></img>
                                <p className='mb-0'>{product.title.shortTitle}</p>
                                <p className='fw-bold'>{product.discount}</p>
                            </div>
                        </Link>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default ProductSlide