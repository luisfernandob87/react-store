import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/#"><img src="https://www.max.com.gt/media/logo/stores/1/logo-max-header.png" alt="Logo" />Barato</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link href="/#/login">Login</Nav.Link>
              <Nav.Link href="/#/purchases">Purchases</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    );
};

export default NavBar;