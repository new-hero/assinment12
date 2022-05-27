import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const {_id, name, img, description, quantity, price } = props.tool;
    const naviget= useNavigate();
    const handlePurchase=(id)=>{
        naviget("/purchase")
    }
    return (

       
            <div className='card py-3'>
                <h3 className='py-2'> {name}</h3>
                <img src={img} alt='Tool' className='img-fluid' />
                <h3>Type: {description}</h3>
                <h3>Quantity: {quantity} Unit</h3>
                <h3>Price: {price} taka/ Unit</h3>
                <Button onClick={()=>handlePurchase(_id)} className='btn btn-primary border rounded-pill w-50 mx-auto '> Purchase </Button>

            </div>
    

    );
};

export default Tool;