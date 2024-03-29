import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/about">
                        About Us
                    </Nav.Link>
                    <Nav.Link href="/contact">
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Home
