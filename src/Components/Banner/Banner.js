import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img src={banner} className='img-fluid' alt='banner'/>            
        </div>
    );
};

export default Banner;