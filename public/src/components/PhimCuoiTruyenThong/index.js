import React from "react";
import Header from '../Header'
import Footer from '../Footer'
import { Container, Row, Col } from "react-bootstrap";
import '../../css/Filming.css'
import { NavLink } from "react-router-dom";
export default function PhimCuoiTruyenThong() {
    return (
        // Thông tin về gói quay phim
        <Container fluid>

            <Header />

            <Container>


                <Row className="service-filming-inform">

                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-01</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-02</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-03</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-04</NavLink>
                    </Col>
                </Row>
                <Row className="service-filming-inform">
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-05</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-06</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-07</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Phim CTT-08</NavLink>
                    </Col>
                </Row>




            </Container>
            <Footer />
        </Container>
    )
}