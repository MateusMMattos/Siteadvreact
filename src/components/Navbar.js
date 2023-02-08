import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../assets/icone_new.png';

import './Navbar.scss';

const Navigation = () => (
    <Navbar variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href="#home">
          <img 
          src={logo}
          height="40"
          className="d-inline-block align-top"
          alt='logo direito'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Atuação</Nav.Link>
            <NavDropdown title="Redes Sociais" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Telegram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Linkedin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);

export default Navigation;