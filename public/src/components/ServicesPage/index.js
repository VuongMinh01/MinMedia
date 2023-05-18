import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
// import { Image } from "antd"
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
                            <h2>CHỤP ẢNH</h2>
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

                            <h2>QUAY PHIM</h2>
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

                            <h2>FLY CAM</h2>
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