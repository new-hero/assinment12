import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UserRow from '../UserRow/UserRow';

const AllUsers = () => {
    const [allUser, setAllUser] = useState([])
    useEffect(() => {
        fetch('https://assignment12server-lime.vercel.app/users')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [allUser])
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
                        allUser.map(u=> <UserRow
                            key={u._id}
                            u={u}
                            ></UserRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllUsers;