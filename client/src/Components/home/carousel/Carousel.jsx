import React from 'react'

import './carousel.css'

import Carousel from 'react-bootstrap/Carousel';

import { bannerData } from '../../../Constants/data';

const CarouselItem = () => {
    return (
        <Carousel className='carousel-sec mt-2'>
            {
                bannerData.map((data) => {
                    return (
                        <Carousel.Item key={data.url}>
                            <img
                                className="d-block w-100"
                                src={data.url}
                                alt="carousel"
                            />
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    )
}

export default CarouselItem