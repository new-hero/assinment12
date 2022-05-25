import React from 'react';

const Tool = ({name, img, description, quantity, price}) => {

    return (
        <div className='card'>
            <h3>{name}</h3>
            <img src={img} alt='Tool' />
            <h3>{description}</h3>
            <h3>{quantity}</h3>
            <h3>{price}</h3>
            
        </div>
    );
};

export default Tool;