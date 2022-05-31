import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Userrow = ({ u }) => {
    const { email, role } = u;

    const [user]=useAuthState(auth)


    const makeAdmin = () => {
       
        fetch(`https://blooming-headland-33271.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
               'authorization': `${user.email}`
            }
        })
            .then(res => res.json())
            .then(data => {

                toast('role add successful')

            },[role])


    }

    const removebtn = () => {
     


    }
    return (

        <tr>
            <td></td>
            <td>{u.email}</td>
            <td>{role}</td>
            <td>{role !== 'admin' && <Button onClick={makeAdmin} className='btn btn-xs' >Make Admin</Button>}</td>
            <td>{role !== 'admin' && <Button onClick={removebtn} className='btn btn-xs' > X </Button>}</td>
        </tr>
    );
};

export default Userrow;