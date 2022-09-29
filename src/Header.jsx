import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <Navbar className="header" expand="lg">
      <Container>
      <Navbar.Brand href="/">
           <h4 className="brand-name">Ring Store</h4>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/rings">Rings</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
