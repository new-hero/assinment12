// import React, { useEffect, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import Loading from '../Loading/Loading';


// const Purchase = () => {
//     const [user, loading, error] = useAuthState(auth)

//     const [address, setAddress] = useState('');
//     const [phone, setPhone] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [currentTool, setCurrentTool] = useState({});
//     // useEffect()

//     if (loading) {
//         return <Loading></Loading>
//     }
//     const availableQuantity = quantity < currentTool.quantity;

//     const handlePurchase = () => {
//     }

//     return (
//         <div>


//             <Form onSubmit={handlePurchase}>
//                 <Form.Group className="my-3" >
//                     <Form.Label>Quantity</Form.Label>
//                     <Form.Control type="number" onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
//                 </Form.Group>


//                 <Form.Group className="mb-3" disabled>
//                     <Form.Label> Name</Form.Label>
//                     <Form.Control type="text" value={user?.displayName} required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" disabled>
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" value={user?.email} required />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" >
//                     <Form.Label>Mobile Number</Form.Label>
//                     <Form.Control type="number" onChange={(e) => setPhone(e.target.value)} placeholder="Mobile Number" required />
//                 </Form.Group>

//                 {
//                     availableQuantity?
//                     <Button variant="primary" type="submit" >
//                         Purchase Now
//                     </Button>: <Button variant="primary" type="submit" disabled >
//                         Purchase Now
//                     </Button>
//                 }

//             </Form>

//         </div>
//     );
// };

// export default Purchase;