import auth from '../../firebase.init';
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const [alluser, setAlluser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAlluser(data))
    }, [alluser])
    const currentUser= alluser.find(u=> u.email === user?.email)
    const adminUser=currentUser?.role;

    const navigate = useNavigate();
    const handlelogout=()=>{
        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate('/')
    }
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-4'>
                <Container>
                    <Navbar.Brand as={Link} to="/">Essential Tools</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="/protfolio">Protfolio</Nav.Link>
                            {adminUser === 'admin' && <Nav.Link className='text-light' as={Link} to="/manage">Manage Tools</Nav.Link>}
                        </Nav>

                        <Nav className="ms-auto">
                            {
                                user ? <Nav>
                                    <Nav.Link className='text-light' as={Link} to="/dashbord">Dashbord</Nav.Link>

                                     <Button onClick={handlelogout}>Sign out</Button>
                                     <span>{user.displayName}</span>
                                </Nav> : <Nav.Link className='text-light' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;