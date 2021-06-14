import React, { Component } from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 class Header extends Component {
    render() {
        return (
 <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Digimon App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">myDigimon</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        )
    }
}

export default Header;
