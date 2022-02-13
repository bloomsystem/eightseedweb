import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarPart = ({ istop }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="bg-basic"
      >
        <Container>
          <Navbar.Brand href="#home">eight seed</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#pricing">Recruit</Nav.Link>
            </Nav>
            <Nav>
              <Nav className="text-tone">
                北海道札幌市のシステム制作・Webデザイン
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {!istop && <div className="round-under" />}
    </>
  );
};

export default NavbarPart;
