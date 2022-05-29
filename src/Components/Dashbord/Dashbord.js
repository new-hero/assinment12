import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className='container'>
        <div className='row'>
        <div className='col-md-2  d-flex flex-column text-start py-5'>
            <Link style={{textDecoration:"none", fontSize:"25px", }} to="order">My Orders</Link><br/>
            <Link style={{textDecoration:"none", fontSize:"25px", }} to="review">Add A Review</Link> <br/>
            <Link style={{textDecoration:"none", fontSize:"25px", }} to="">My Profile</Link>
                                    
        </div>
        <div className='col-md-10'>
            <Outlet></Outlet>
        </div>
        </div>
        </div>
    );
};

export default Dashbord;