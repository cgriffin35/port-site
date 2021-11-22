import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';

interface NavbarProps {

}

const NavbarComp: React.FC<NavbarProps> = ({}) => {
    return (
      <Navbar className="p-1" sticky="top"  expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <Image src='/icon-only-logo.png' alt='Site logo' width='60' height='60'></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Nav >
          <Nav.Link href="#about">About me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact me</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarComp;
