import React from 'react'
import { threeBanner } from '../../../Constants/data'
import "./threeBanner.css"

const ThreeBanner = () => {
    return (
        <div className='three-banner d-flex d-flex justify-content-between m-auto mt-4'>
            {
                threeBanner.map((image) => {
                    return (
                        <div className='banner-img' key={image.id}>
                            <img src={image.url} alt='banner-img' />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ThreeBanner