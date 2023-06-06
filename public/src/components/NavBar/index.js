import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../../css/NavBar.css'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="" expand="lg" >
            <Container fluid className='homeNav'
            >
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0 nav-customr"

                        navbarScroll
                    >
                        <NavLink className='NavLinkCss' to="/"  >HOME</NavLink>
                        <NavLink className='NavLinkCss' to="/service">SERVICES</NavLink>
                        <NavLink className='NavLinkCss' to="/videos">VIDEOS</NavLink>

                        <NavLink className='NavLinkCss' to="/albums">ALBUMS</NavLink>

                        <NavLink className='NavLinkCss' to="/contact">CONTACT</NavLink>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;