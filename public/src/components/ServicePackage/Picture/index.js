import React from "react";
import Header from '../../Header'
import Footer from '../../Footer'
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';

import '../../../css/Picture.css'
import Img15 from '../../../assets/Service/Picture/TruyenThong.jpg'
import Img16 from '../../../assets/Service/Picture/PhongSu.JPG'

export default function Picture() {
    return (
        // Thông tin về gói chụp ảnh
        <Container fluid>

            <Header />
            <Container>

                <Row>
                    <Col sm={6} xs={12} >
                        <div className="service-picture-inform">

                            <h2>GÓI CHỤP TRUYỀN THỐNG</h2>
                            <p>1 MÁY CHỤP TRUYỀN THỐNG LỄ - TIỆC SÁNG TRƯA</p>
                            <p>2.500.000 VND</p>
                            <p>1 MÁY CHỤP TRUYỀN THỐNG LỄ - TIỆC SÁNG CHIỀU</p>
                            <p>3.000.000 VND</p>
                            <p>2 MÁY CHỤP TRUYỀN THỐNG LỄ + TIỆC</p>
                            <p>5.000.000 VND</p>
                            <h4>RA SẢN PHẨM HOÀN THIỆN</h4>
                        </div>
                    </Col>
                    <Col sm={6} xs={12} >
                        <div className="service-picture-inform">

                            <h2>GÓI CHỤP PHÓNG SỰ</h2>
                            <p>1 MÁY CHỤP PHÓNG SỰ LỄ - TIỆC SÁNG TRƯA</p>
                            <p>3.000.000 VND</p>
                            <p>1 MÁY CHỤP PHÓNG SỰ LỄ - TIỆC SÁNG CHIỀU</p>
                            <p>4.000.000 VND</p>
                            <p>2 MÁY CHỤP PHÓNG SỰ LỄ + TIỆC</p>
                            <p>6.000.000 VND</p>
                            <h4>RA SẢN PHẨM HOÀN THIỆN</h4>
                        </div>
                    </Col>
                </Row>
                <Container fluid>
                    <Row>
                        <Col sm={6} xs={12}>
                            <Image className='Image'

                                src={Img15} alt={Img15}
                                preview={false}
                            ></Image>
                        </Col>
                        <Col sm={6} xs={12}>
                            <Image className='Image'

                                src={Img16} alt={Img16}
                                preview={false}

                            ></Image>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </Container>


    )
}