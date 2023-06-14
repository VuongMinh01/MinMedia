import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import { MDBIcon } from 'mdbreact';
import '../../css/HomeContact.css'
import ContactFB from '../../assets/facebook.jpg'
export default function HomeContact() {
    return (
        <>
            {/* Thông tin file page Contact */}
            <Container>
                <Row>
                    <Col sm={7} xs={12}>
                        <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                        <Row>
                            <Col sm={6} xs={12}>
                                <MDBIcon fas icon="map-marker-alt" size='3x' />
                                <h4>Địa chỉ</h4>
                                <p>Hóc Môn, Tp Hồ Chí Minh</p>
                            </Col>
                            <Col sm={6} xs={12}>
                                <MDBIcon far icon="clock" size='3x' />
                                <h4>Thời gian làm việc</h4>
                                <p>8h đến 20h các ngày trong tuần</p>

                            </Col>
                            <Col sm={6} xs={12}>
                                <MDBIcon fas icon="envelope" size='3x' />
                                <h4>MAIL</h4>
                                <p>thienminmedia@ldg.edu.vn
                                </p>

                            </Col>
                            <Col sm={6} xs={12}>
                                <MDBIcon fas icon="phone" size='3x' />

                                <h4>Số điện thoại</h4>
                                <p>0703427959</p>

                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5} xs={12}>
                        <Image className="Image"
                            width={360}
                            height={360}
                            preview={false}
                            src={ContactFB} alt={ContactFB}
                        ></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}