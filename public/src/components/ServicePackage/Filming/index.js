import React from "react";
import Header from '../../Header'
import Footer from '../../Footer'
import { Container, Row, Col } from "react-bootstrap";
import '../../../css/Filming.css'
import ReactPlayer from 'react-player';

export default function Filming() {
    return (
        <Container fluid>

            <Header />
            <Container>

                <Row>
                    <Col sm={6} xs={12} >
                        <div className="service-filming-inform">

                            <h2>GÓI QUAY TRUYỀN THỐNG</h2>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </div>
                    </Col>
                    <Col sm={6} xs={12} >
                        <div className="service-filming-inform">

                            <h2>GÓI QUAY PHÓNG SỰ</h2>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
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
            <Footer />
        </Container>
    )
}