import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Managetool = (props) => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `https://blooming-headland-33271.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    },[tool, id]);
    const { _id, name, img, description, quantity, price } = props.tool;
    const handleUpdate = event => {
       event.preventDefault();
        const addQuantity=parseInt(event.target.addquantity.value);
        const quantity = tool.quantity + addQuantity;
        const updateQuantityobj = {quantity}
        
        fetch(`https://protected-garden-39140.herokuapp.com/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantityobj)
        })
            .then(res => res.json())
            .then(data => {
                toast("Quantity add successful")
                event.target.reset();
            })



    }
    return (


        <div className='container mt-5 w-lg-50' >
        <div className='border p-3 m-3 rounded'>
            <h4>Name: {name}</h4>
            <img style={{ height: "200px" }} src={img} className='img-fluid' alt='product imgage' />
            <h4>Type: {description}</h4>
            <h4>Price: {price} taka</h4>
            <h4>Quantity: {quantity} Unit </h4>
           
        </div>
        <div className='d-flex mb-2'>
            <form onSubmit={handleUpdate} className='w-50 mx-auto'>
                <input type='text' name='addquantity' placeholder='Add Quantity' className=" text-center m-1"  required/>
                <br />
                <input type='submit' value='Add Quantity' className='w-100 btn btn-primary m-1'  />
            </form>
        </div>

    </div>

        // <div className='card py-3'>
        //     <h3 className='py-2'> {name}</h3>
        //     <img src={img} alt='Tool' className='img-fluid' />
        //     <h3>Type: {description}</h3>
        //     <h3>Quantity: {quantity} Unit</h3>
        //     <h3>Price: {price} taka/ Unit</h3>
        //     <Button onClick={() => handleUpdate(_id)} className='btn btn-primary border rounded-pill w-50 mx-auto '> Update </Button>

        // </div>
    )
};

export default Managetool;


