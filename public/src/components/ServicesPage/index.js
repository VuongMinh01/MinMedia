import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Button } from 'antd'
import '../../css/ServicesPage.css'
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
            {/* Thông tin về 3 gói dịch vụ trong Service */}
            <Container fluid>
                <Row
                    className="backgroundImage"
                >
                    <Col className="col-inform"

                        sm={4} xs={12}>
                        <div className="service-inform">
                            <h1>CHỤP ẢNH</h1>
                            <h4>GÓI CHỤP TRUYỀN THỐNG</h4>

                            <h4>GÓI CHỤP PHÓNG SỰ</h4>
                            <h4>LỄ - TIỆC</h4>
                            <h4>SÁNG - TRƯA - CHIỀU</h4>
                            <p>BẢO ĐẢM ĐẦU RA SẢN PHẨM</p>


                            <Button onClick={Picture} type="primary" block>Xem thêm</Button>

                        </div>


                    </Col>
                    <Col className="col-inform"


                        sm={4} xs={12}>
                        <div className="service-inform">

                            <h1>QUAY PHIM</h1>
                            <h4>GÓI QUAY TRUYỀN THỐNG</h4>
                            <h4>GÓI QUAY PHÓNG SỰ</h4>
                            <h4>LỄ - TIỆC</h4>
                            <h4>SÁNG - TRƯA - CHIỀU</h4>
                            <p>BẢO ĐẢM ĐẦU RA SẢN PHẨM</p>
                            <Button onClick={Filming} type="primary" block>Xem thêm</Button>

                        </div>

                    </Col>
                    <Col className="col-inform"

                        sm={4} xs={12}>

                        <div className="service-inform">

                            <h1>FLYCAM</h1>

                            <h4>GÓI FLYCAM NGÀY CƯỚI</h4>
                            <h4>LỄ - TIỆC</h4>
                            <h4>SÁNG - TRƯA - CHIỀU</h4>
                            <p></p>
                            <p></p>

                            <p>BẢO ĐẢM ĐẦU RA SẢN PHẨM</p>

                            <Button onClick={Flycam} type="primary" block>Xem thêm</Button>

                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}