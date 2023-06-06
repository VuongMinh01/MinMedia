import React from "react";
import Header from '../../Header'
import Footer from '../../Footer'
import { Container, Row, Col } from "react-bootstrap";
import '../../../css/Filming.css'
import ReactPlayer from 'react-player';

export default function Filming() {
    return (
        // Thông tin về gói quay phim
        <Container fluid>

            <Header />
            <Container>

                <Row>
                    <Col sm={6} xs={12} >
                        <div className="service-filming-inform">

                            <h2>GÓI QUAY TRUYỀN THỐNG</h2>
                            <p>1 MÁY QUAY TRUYỀN THỐNG LỄ - TIỆC SÁNG TRƯA</p>
                            <p>3 TRIỆU 500 VNĐ</p>
                            <p>1 MÁY QUAY TRUYỀN THỐNG LỄ - TIỆC SÁNG CHIỀU</p>
                            <p>3 TRIỆU 500 VND</p>
                            <p>2 MÁY QUAY TRUYỀN THỐNG LỄ + TIỆC</p>
                            <p>5 TRIỆU 500 VNĐ</p>
                            <h4>RA SẢN PHẨM HOÀN THIỆN</h4>
                        </div>
                    </Col>
                    <Col sm={6} xs={12} >
                        <div className="service-filming-inform">

                            <h2>GÓI QUAY PHÓNG SỰ</h2>
                            <p>1 MÁY QUAY PHÓNG SỰ LỄ - TIỆC SÁNG TRƯA</p>
                            <p>3 TRIỆU 500 VNĐ</p>
                            <p>1 MÁY QUAY PHÓNG SỰ  LỄ - TIỆC SÁNG CHIỀU</p>
                            <p>4 TRIỆU 500 VND</p>
                            <p>2 MÁY QUAY PHÓNG SỰ  LỄ + TIỆC</p>
                            <p>7 TRIỆU 500 VNĐ</p>
                            <h4>RA SẢN PHẨM HOÀN THIỆN</h4>
                        </div>
                    </Col>
                </Row>
                <Row className="background-phim">
                    <Col sm={12} xs={12}>

                        <center>

                            <h3>PHIM TRUYỀN THỐNG</h3>
                        </center>
                        <ReactPlayer
                            url='https://www.youtube.com'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />

                    </Col>
                    <Col sm={12} xs={12}>
                        <center>
                            <h3>PHIM PHÓNG SỰ</h3>
                        </center>
                        <ReactPlayer
                            url='https://www.youtube.com'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    )
}