import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Logo from '../../assets/minmedia.png'
import React from 'react';
import '../../css/Color.css';
import '../../css/NavBar.css';

function NavScrollExample() {
    return (
        <Navbar expand="lg" fixed='top' style={{ backgroundColor: 'burlywood' }}   >

            <Container fluid>
                <img
                    src={Logo}
                    width={'60px'}
                    height={'50px'}
                    className="d-inline-block align-center"

                />
                <Navbar.Brand
                    style={{ fontSize: '20px', color: 'white', padding: '5px' }}>

                    Min Media</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navbar-nav ml-auto text-left"
                        style={{ fontSize: '20px' }}
                    >

                        <NavLink className='NavLinkCss' to="/"  >Trang chủ</NavLink>
                        <NavLink className='NavLinkCss' to="/service">Dịch vụ</NavLink>
                        <NavLink className='NavLinkCss' to="/bangGiaChup">Bảng giá chụp</NavLink>
                        <NavLink className='NavLinkCss' to="/bangGiaQuay">Bảng giá quay</NavLink>

                        <NavLink className='NavLinkCss' to="/videos">Videos</NavLink>
                        <NavLink className='NavLinkCss' to="/albums">Albums</NavLink>
                        <NavLink className='NavLinkCss' to="/contact">Liên lạc</NavLink>



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;