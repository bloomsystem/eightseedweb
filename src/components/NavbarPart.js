import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
              <Link className="p-2 text-decoration-none text-tone" to="/about">
                About
              </Link>
              <Link className="p-2 text-decoration-none text-tone" to="/works">
                Works
              </Link>
              <Link
                className="p-2 text-decoration-none text-tone"
                to="/recruit"
              >
                Recruit
              </Link>
              <Nav.Link
                href="https://forms.gle/igQkPtFtLs7FhQ8L6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-decoration-none text-tone"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav
                class
                className="p-2 text-decoration-none text-tone"
                Name="text-tone"
              >
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
