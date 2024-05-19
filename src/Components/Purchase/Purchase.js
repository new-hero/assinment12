import React, { useEffect, useState } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Purchase = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `https://assignment12server-lime.vercel.app/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    },[tool, id]);

    // const {_id, name, img, description, quantity, price } = tool;


    const [user, loading] = useAuthState(auth);
    const userName=user?.displayName;
    const userEmail=user?.email;
    const [address, setAddress] = useState(' ');
    const [phone, setPhone] = useState(' ');
    const [giveQuantity, setGiveQuantity] = useState(" ");

    if(giveQuantity<0){
        alert("Negative value not accept");
        setGiveQuantity(" ")
        return;
         
    }


    // useEffect()

    if (loading) {
        return <Loading></Loading>
    }
    const availableQuantity = giveQuantity <= tool.quantity;



    const handlePurchase = event => {
        event.preventDefault();
    const purchaseUser= { userName, userEmail, address, phone, giveQuantity: giveQuantity, status: 'Pending' }

        fetch(`https://assignment12server-lime.vercel.app/orders`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseUser)
        })
            .then(res => res.json())
            .then(data => {
            toast('Successfully add to order list')    
            })
            event.target.reset();
            navigate('/')
            

            


    }

    return (
        <div style={{maxWidth:"400px", color:"white"}} className='mx-auto p-3 bg-secondary mt-5 '>


            <Form onSubmit={handlePurchase}>
                <Form.Group className="my-3" >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text"  className="text-center" onBlur={(e) => setGiveQuantity(e.target.value)} placeholder="Quantity" required />
                </Form.Group>


                <Form.Group className="mb-3" disabled>
                    <Form.Label> Name</Form.Label>
                    <Form.Control type="text"  className="text-center" value={user?.displayName}/>
                </Form.Group>
                <Form.Group className="mb-3" disabled>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  className="text-center" value={user?.email} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text"  className="text-center" onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text"  className="text-center" onChange={(e) => setPhone(e.target.value)} placeholder="Mobile Number" required />
                </Form.Group>

                {
                    availableQuantity?
                    <Button variant="danger" type="submit" >
                        Purchase Now
                    </Button>: <Button variant="primary" type="submit" disabled >
                        Purchase Now
                    </Button>
                }

            </Form>

        </div>
    );
};

export default Purchase;