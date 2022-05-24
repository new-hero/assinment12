import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='text-decoration-none text-light p-4' >Home</Link>
                        <Link to='/protfolio' className='text-decoration-none text-light p-4'>Protfolio</Link>
                    </Nav>
                    <Nav>
                    <Link to='/' className='text-decoration-none text-light p-4' >Home</Link>
                        <Link to='/protfolio' className='text-decoration-none text-light p-4'>Protfolio</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;