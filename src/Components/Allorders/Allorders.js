import React, { useEffect, useState } from 'react';
import Order from '../../Components/Order/Order'

const Allorders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <div className='tool-grid'>
             {
                 orders.map( (order, index)=> <Order order={order} key={index}></Order>)
             }
         </div>
            
            
        </div>
    );
};

export default Allorders;