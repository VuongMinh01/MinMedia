import React from "react";
import Header from '../../Header'
import Footer from '../../Footer'
import { Container, Row, Col } from "react-bootstrap";
import '../../../css/Flycam.css'
import ReactPlayer from "react-player";
export default function Flycam() {
    return (
        // Thông tin về gói flycam
        <Container fluid>

            <Header />
            <Row>
                <Col sm={6} xs={12} >
                    <div className="service-flycam-inform">

                        <h1>GÓI QUAY FLYCAM</h1>
                        <h3>FLYCAM WEDDING</h3>
                        <h3>FLYCAM TEAM BUILDING</h3>
                        <h3>3.000.000 VND</h3>
                        <h3>ĐẢM BẢO ĐẦU RA SẢN PHẨM</h3>
                        <p></p>
                        <p></p>
                    </div>
                </Col>
                <Col sm={6} xs={12}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=Zccd25N7tRE&t=2s'
                        width="100%"
                        height="500px"
                        playing={false}
                        controls={true}
                    />
                </Col>
            </Row>
            <Footer />
        </Container>

    )
}