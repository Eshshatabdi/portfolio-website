import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NabBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark " variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Shatabdi</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="blogs">Projects</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NabBar;