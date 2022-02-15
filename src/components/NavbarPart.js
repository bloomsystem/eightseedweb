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
        className="bg-primary"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/eightseedweb" className="fw-bold text-tone">
            eight seed
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/eightseedweb/about">About</Nav.Link>
              <Nav.Link href="/eightseedweb/works">Works</Nav.Link>
              <Nav.Link href="/eightseedweb/recruit">Recruit</Nav.Link>
              <Nav.Link
                href="https://forms.gle/igQkPtFtLs7FhQ8L6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav className="text-tone">
                北海道札幌市のシステム制作・Webデザイン
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {!istop && <div className="round-under mt-5" />}
    </>
  );
};

export default NavbarPart;
