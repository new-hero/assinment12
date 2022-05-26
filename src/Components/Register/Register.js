import React, { useState } from 'react';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const handleRegister = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }
    const navigate= useNavigate();

    let errorelement;
    if (error) {
        errorelement = error.message;
    }
    if (loading) {
    return <Loading></Loading>    
    }

    let from= location.state?.from?.pathname || "/"
    if(user){
        navigate(from, {replace:true})
    }
    const loginpage =()=>{
        navigate('/login')
    }

    return (
        <div className='container my-5'>
            <div className='w-25 mx-auto my-5 text-start'>


                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                </Form>
            <p>New User? <Button onClick={loginpage}>Login</Button></p>

            </div>
            <p>{errorelement}</p>
        </div>
    );

};

export default Register;