import React from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Row, Col } from "react-bootstrap";
import '../../css/Filming.css'
import { NavLink } from "react-router-dom";
export default function FlyCam() {
    return (
        // Thông tin về gói quay phim
        <Container fluid>

            <Header />

            <Container>


                <Row className="service-filming-inform">

                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-01</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-02</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-03</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-04</NavLink>
                    </Col>
                </Row>
                <Row className="service-filming-inform">
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-05</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-06</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-07</NavLink>
                    </Col>
                    <Col sm={3} xs={12} >
                        <NavLink className='NavLink' to="/videos">Ảnh PSC-08</NavLink>
                    </Col>
                </Row>




            </Container>
            <Footer />
        </Container>
    )
}