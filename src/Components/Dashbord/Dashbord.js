import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashbord = () => {
    const [user] = useAuthState(auth);

    const [alluser, setAlluser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAlluser(data))
    }, [alluser])
    const currentUser = alluser.find(u => u.email === user?.email)
    const adminUser = currentUser?.role;

    return (
        <div className='container'>
            <div className='row py-5'>
                <div className='col-md-2  d-flex flex-column text-start '>
                    <Link style={{ textDecoration: "none", fontSize: "25px", marginBottom: "10px" }} to="">My Profile</Link>
                    {adminUser === 'admin' ?
                        <>
                            <Link style={{ textDecoration: "none", fontSize: "25px", marginBottom: "10px" }} to="/dashbord/allusers">All Users</Link>
                            <Link style={{ textDecoration: "none", fontSize: "25px", marginBottom: "10px" }} to="/dashbord/allorders">All Orders</Link>
                        </>
                        :
                        <>
                            <Link style={{ textDecoration: "none", fontSize: "25px", marginBottom: "10px" }} to="/dashbord/orders">My Orders</Link>
                            <Link style={{ textDecoration: "none", fontSize: "25px", marginBottom: "10px" }} to="/dashbord/review">Add A Review</Link>
                        </>


                    }

                </div>
                <div className='col-md-10'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;