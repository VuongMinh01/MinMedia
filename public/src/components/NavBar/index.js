import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../../css/NavBar.css'
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
                        <Nav.Link href="/"  >HOME</Nav.Link>
                        <Nav.Link href="/service">SERVICES</Nav.Link>
                        <Nav.Link href="/videos">VIDEOS</Nav.Link>

                        <Nav.Link href="/albums">ALBUMS</Nav.Link>

                        <Nav.Link href="/contact">CONTACT</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;