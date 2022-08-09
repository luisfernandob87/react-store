import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const logout = () => {
      localStorage.setItem("token", "")
      navigate('/login')
    };

    const token = localStorage.getItem("token");

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/#"><img src="https://www.max.com.gt/media/logo/stores/1/logo-max-header.png" alt="Logo" />Barato</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link href="/#/purchases">Purchases</Nav.Link>
              {token ? (
                <Nav.Link as={Button} onClick={logout}>
                  Logout
                </Nav.Link>
              ):
              <Nav.Link href="/#/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    );
};

export default NavBar;