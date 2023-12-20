import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Button } from 'antd'
import '../../css/HomePagePanel.css'
import { useNavigate } from "react-router-dom";
export default function HomePagePanel() {
    const navigate = useNavigate();
    const AnhPhongSuCuoi = () => {
        navigate('/AnhPhongSuCuoi')
    }
    const AnhCuoiTruyenThong = () => {
        navigate('/AnhCuoiTruyenThong')
    }
    const PhimPhongSuCuoi = () => {
        navigate('/PhimPhongSuCuoi')
    }
    const PhimCuoiTruyenThong = () => {
        navigate('/PhimCuoiTruyenThong')
    }
    const Flycam = () => {
        navigate('/ServicePackage/Flycam')
    }
    return (

        // Video thứ nhất trong file Home

        <Container fluid>
            <Row
                className="backgroundImage"
            >
                <Col className="col-inform"

                    sm={6} xs={12}>
                    <div className="service-inform" style={{ width: '50%' }}>

                        <h1>Ảnh phóng sự cưới</h1>

                        <Button onClick={AnhPhongSuCuoi} type="primary" block>Xem thêm</Button>

                    </div>


                </Col>
                <Col className="col-inform"

                    sm={6} xs={12}>
                    <div className="service-inform" style={{ width: '50%' }}>

                        <h1>Ảnh cưới truyền thống</h1>

                        <Button onClick={AnhCuoiTruyenThong} type="primary" block>Xem thêm</Button>

                    </div>


                </Col>

            </Row>
            <Row className="backgroundImage"
            >
                <Col className="col-inform"


                    sm={4} xs={12}>
                    <div className="service-inform">
                        <h1>Phim phóng sự cưới</h1>


                        <Button onClick={PhimPhongSuCuoi} type="primary" block>Xem thêm</Button>

                    </div>

                </Col>
                <Col className="col-inform"

                    sm={4} xs={12}>

                    <div className="service-inform">

                        <h1>Phim cưới truyền thống </h1>


                        <Button onClick={PhimCuoiTruyenThong} type="primary" block>Xem thêm</Button>

                    </div>
                </Col>
                <Col className="col-inform"

                    sm={4} xs={12}>

                    <div className="service-inform">

                        <h1>Flycam - Teambuilding </h1>


                        <Button onClick={Flycam} type="primary" block>Xem thêm</Button>

                    </div>
                </Col>
            </Row>

        </Container>


    )
}
