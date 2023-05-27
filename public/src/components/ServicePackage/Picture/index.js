import React from "react";
import Header from '../../Header'
import Footer from '../../Footer'
import { Container, Row, Col } from "react-bootstrap";
import '../../../css/Picture.css'
export default function Picture() {
    return (

        <Container fluid>

            <Header />
            <Container>

                <Row>
                    <Col sm={6} xs={12} >
                        <div className="service-picture-inform">

                            <h2>GÓI CHỤP TRUYỀN THỐNG</h2>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </div>
                    </Col>
                    <Col sm={6} xs={12} >
                        <div className="service-picture-inform">

                            <h2>GÓI CHỤP PHÓNG SỰ</h2>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>


    )
}