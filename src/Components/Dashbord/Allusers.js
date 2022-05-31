import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Userrow from '../Userrow/Userrow';

const Allusers = () => {
    const [alluser, setAlluser] = useState([])
    useEffect(() => {
        fetch('https://blooming-headland-33271.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAlluser(data))
    }, [alluser])
    return (
        <div>
          
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Remove user</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        alluser.map(u=> <Userrow
                            key={u._id}
                            u={u}
                            ></Userrow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Allusers;