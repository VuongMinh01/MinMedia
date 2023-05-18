import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
// import { Image } from "antd"
import Test from '../../assets/SBIN0813.jpg'
import BackGroundService from '../../assets/backgroundService.gif'
import '../../css/ServicesPage.css'
export default function ServicesPage() {
    return (
        <>
            <Container fluid>
                <Row
                    className="backgroundImage"
                >
                    <Col className="col-inform"

                        sm={4} xs={12}>
                        <div className="service-inform">
                            <h3>CHỤP ẢNH</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                        </div>


                    </Col>
                    <Col className="col-inform"


                        sm={4} xs={12}>
                        <div className="service-inform">

                            <h3>QUAY PHIM</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                        </div>

                    </Col>
                    <Col className="col-inform"

                        sm={4} xs={12}>

                        <div className="service-inform">

                            <h3>FLY CAM</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                            <h3>Camera</h3>
                            <p>fsdf</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}