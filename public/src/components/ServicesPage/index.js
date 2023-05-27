import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Button } from 'antd'
import '../../css/ServicesPage.css'
import ReactPlayer from 'react-player';
import { useNavigate } from "react-router-dom";
export default function ServicesPage() {
    const navigate = useNavigate();
    const Picture = () => {
        navigate('/ServicePackage/Picture')
    }
    const Filming = () => {
        navigate('/ServicePackage/Filming')
    }
    const Flycam = () => {
        navigate('/ServicePackage/Flycam')
    }
    return (
        <>
            <Container fluid>
                <Row
                    className="backgroundImage"
                >
                    <Col className="col-inform"

                        sm={4} xs={12}>
                        <div className="service-inform">
                            <h1>CHỤP ẢNH</h1>
                            <h4>GÓI CHỤP TRUYỀN THỐNG</h4>
                            <p>3 triệu VND</p>
                            <h4>GÓI CHỤP PHÓNG SỰ</h4>
                            <p>4 triệu VND</p>


                            <Button onClick={Picture} type="primary" block>Xem thêm</Button>

                        </div>


                    </Col>
                    <Col className="col-inform"


                        sm={4} xs={12}>
                        <div className="service-inform">

                            <h1>QUAY PHIM</h1>
                            <h4>GÓI QUAY TRUYỀN THỐNG</h4>
                            <h3>3 triệu</h3>
                            <h4>GÓI QUAY PHÓNG SỰ</h4>
                            <h3>4 triệu</h3>
                            <Button onClick={Filming} type="primary" block>Xem thêm</Button>

                        </div>

                    </Col>
                    <Col className="col-inform"

                        sm={4} xs={12}>

                        <div className="service-inform">

                            <h1>FLYCAM</h1>
                            <h4>GÓI FLYCAM NGÀY CƯỚI</h4>
                            <br></br>
                            <h3>3 triệu</h3>
                            <br></br>
                            <Button onClick={Flycam} type="primary" block>Xem thêm</Button>

                        </div>
                    </Col>
                </Row>
                <Row className="background-phim">
                    <Col sm={12} xs={12}>

                        <center>

                            <h3>Phim truyền thống</h3>
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

                            <h3>Phim phóng sự</h3>
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
        </>
    )
}