import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import { MDBIcon } from 'mdbreact';
import Test1 from '../../assets/ducthien.jpg'
import '../../css/HomeContact.css'
export default function HomeContact() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={7} xs={12}>
                        <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                        <Row>
                            <Col sm={6} xs={12}>
                                <MDBIcon fas icon="map-marker-alt" size='3x' />
                                <h4>ADDRESS</h4>
                                <p>........</p>
                            </Col>
                            <Col sm={6} xs={12}>
                                <MDBIcon far icon="clock" size='3x' />
                                <h4>OPENING HOURS</h4>
                                <p>MONDAY to SATURDAY: 8h đến 20h</p>

                            </Col>
                            <Col sm={6} xs={12}>
                                <MDBIcon fas icon="envelope" size='3x' />
                                <h4>EMAIL</h4>
                                <p>PHANDUCTHIEN@gmail.com</p>

                            </Col>
                            <Col sm={6} xs={12}>
                                <MDBIcon fas icon="phone" size='3x' />

                                <h4>PHONE</h4>
                                <p>+84........</p>

                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5} xs={12}>
                        <Image className="Image"
                            width={360}
                            height={360}
                            src={Test1} alt={Test1}
                        ></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}