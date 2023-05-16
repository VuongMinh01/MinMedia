import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../../css/NavBar.css'
function NavBar() {
    return (
        <Navbar bg="" expand="lg" >
            <Container fluid
                style={{
                    backgroundColor: '#EDBB99',
                    borderRadius: '10px',
                    border: 'solid 0.1px'
                }}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{
                            maxHeight: '100px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            fontSize: '25px',
                            fontFamily: 'Times New Roman',
                            fontStyle: 'bold',
                            fontWeight: 'bolder'
                        }}
                        navbarScroll
                    >
                        <Nav.Link href="/"  >HOME</Nav.Link>
                        <Nav.Link href="/service">SERVICES</Nav.Link>
                        <Nav.Link href="/video">VIDEOS</Nav.Link>

                        <Nav.Link href="/albums">ALBUMS</Nav.Link>

                        <Nav.Link href="/contact">CONTACT</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;