import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className='container'>
        <div className='row py-5'>
        <div className='col-md-2  d-flex flex-column text-start '>
            <Link style={{textDecoration:"none", fontSize:"25px" , marginBottom:"10px" }} to="order">My Orders</Link>
            <Link style={{textDecoration:"none", fontSize:"25px" , marginBottom:"10px" }} to="review">Add A Review</Link> 
            <Link style={{textDecoration:"none", fontSize:"25px" , marginBottom:"10px" }} to="">My Profile</Link>
            <Link style={{textDecoration:"none", fontSize:"25px" , marginBottom:"10px" }} to="/dashbord/allusers">All Users</Link>
                                    
        </div>
        <div className='col-md-10'>
            <Outlet></Outlet>
        </div>
        </div>
        </div>
    );
};

export default Dashbord;