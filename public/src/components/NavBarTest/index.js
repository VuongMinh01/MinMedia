import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../../css/NavBar.css'
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.jpg'
import { Image } from 'antd'
export default function NavBarTest() {
    return (
        // Thanh menu chính, nằm trong page header
        <Navbar bg="" expand="lg" >
            <Container fluid className='homeNav'
            >
                <Navbar.Toggle aria-controls="navbarScroll" />


                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0 nav-customr "
                        navbarScroll
                    >


                        <NavLink className='NavLinkCss' to="/"  >Trang chủ</NavLink>
                        <NavLink className='NavLinkCss' to="/service">Dịch vụ</NavLink>
                        <NavLink className='NavLinkCss' to="/videos">Videos</NavLink>

                        <NavLink className='NavLinkCss' to="/albums">Albums</NavLink>

                        <NavLink className='NavLinkCss' to="/contact">Liên lạc</NavLink>

                    </Nav>

                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

