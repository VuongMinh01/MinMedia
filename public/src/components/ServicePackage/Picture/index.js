import React from "react";
import Header from '../../Header'
import Footer from '../../Footer'
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';

import '../../../css/Picture.css'
import Test1 from '../../../assets/SBIN0813.jpg'
export default function Picture() {
    return (

        <Container fluid>

            <Header />
            <Container>

                <Row>
                    <Col sm={6} xs={12} >
                        <div className="service-picture-inform">

                            <h2>GÓI CHỤP TRUYỀN THỐNG</h2>
                            <p>1 MÁY CHỤP TRUYỀN THỐNG LỄ - TIỆC SÁNG TRƯA</p>
                            <p>2 TRIỆU 500 VNĐ</p>
                            <p>1 MÁY CHỤP TRUYỀN THỐNG LỄ - TIỆC SÁNG CHIỀU</p>
                            <p>3 TRIỆU VND</p>
                            <p>2 MÁY CHỤP TRUYỀN THỐNG LỄ + TIỆC</p>
                            <p>5 TRIỆU VNĐ</p>
                            <h4>RA SẢN PHẨM HOÀN THIỆN</h4>
                        </div>
                    </Col>
                    <Col sm={6} xs={12} >
                        <div className="service-picture-inform">

                            <h2>GÓI CHỤP PHÓNG SỰ</h2>
                            <p>1 MÁY CHỤP PHÓNG SỰ LỄ - TIỆC SÁNG TRƯA</p>
                            <p>3 TRIỆU VNĐ</p>
                            <p>1 MÁY CHỤP PHÓNG SỰ LỄ - TIỆC SÁNG CHIỀU</p>
                            <p>4 TRIỆU VND</p>
                            <p>2 MÁY CHỤP PHÓNG SỰ LỄ + TIỆC</p>
                            <p>6 TRIỆU VNĐ</p>
                            <h4>RA SẢN PHẨM HOÀN THIỆN</h4>
                        </div>
                    </Col>
                </Row>
                <Container fluid>
                    <Row>
                        <Col sm={6} xs={12}>
                            <Image className='Image'

                                src={Test1} alt={Test1}
                            ></Image>
                        </Col>
                        <Col sm={6} xs={12}>
                            <Image className='Image'

                                src={Test1} alt={Test1}
                            ></Image>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </Container>


    )
}