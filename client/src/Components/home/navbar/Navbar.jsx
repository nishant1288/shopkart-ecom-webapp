import React from 'react';

import "./navbar.css";

import { navData } from '../../../Constants/data';

const Navbar = () => {
  return (
    <div className='home-nav mt-2'>
        {
            navData.map((data) => {
                return (
                    <div className='nav-image' key={data.url}>
                        <img src={data.url} alt='nav-img' className='nav-img'/>
                        <p>{data.text}</p>
                    </div>
                )
            } )
        }
    </div>
  )
}

export default Navbar