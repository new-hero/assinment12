import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='text-decoration-none text-light p-3' >Home</Link>
                        <Link to='/protfolio' className='text-decoration-none text-light p-3'>Protfolio</Link>
                    </Nav>
                    <Nav>
                     <Button>Login</Button>
                     <Button>LogOut</Button>
                    <Link to='/' className='text-decoration-none text-light p-3' >Home</Link>
                        <Link to='/protfolio' className='text-decoration-none text-light p-3'>Protfolio</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;