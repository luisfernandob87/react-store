import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const NavBar = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
  
    const token = localStorage.getItem("token");

    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(token){
        setShow(true)
      }else {
        navigate("/login")
      }}
    const logout = () => {
      localStorage.setItem("token", "")
      navigate('/login')
    };
    return (
    <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/#"><img src="https://www.max.com.gt/media/logo/stores/1/logo-max-header.png" alt="Logo" />Barato</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link href="/#/purchases">Purchases</Nav.Link>
              {token ? (
                <Nav.Link  onClick={logout}>
                  Logout
                </Nav.Link>
              ):
              <Nav.Link href="/#/login">Login</Nav.Link>
              }
              <Nav.Link onClick={handleShow}>
                Cart (Sidebar)
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose} />
    </>
    );
};

export default NavBar;