import React from "react";
import Header from '../../Header'
import Footer from '../../Footer'
import { Container, Row, Col } from "react-bootstrap";
import '../../../css/Flycam.css'
import ReactPlayer from "react-player";
export default function Flycam() {
    return (
        <Container fluid>

            <Header />
            <Row>
                <Col sm={6} xs={12} >
                    <div className="service-flycam-inform">

                        <h2>GÓI QUAY FLYCAM</h2>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                    </div>
                </Col>
                <Col sm={6} xs={12}>
                    <ReactPlayer
                        url='https://www.youtube.com'
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