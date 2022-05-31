import React from 'react';

const Order = (props) => {
    const { userName, userEmail, address, phone, giveQantity, status }=props.order

    
    return (
        <div className='tool-card'>
            <h3> Name:{userName || 'Avatar'}</h3>
            <h3> Email:{userEmail}</h3>
            <h3>Address:{address}</h3>
            <h3> Mobile:{phone}</h3>
            <h3> Quantity:{giveQantity} unit</h3>
            <h3>status:{status}</h3>
            
        </div>
    );
};

export default Order;