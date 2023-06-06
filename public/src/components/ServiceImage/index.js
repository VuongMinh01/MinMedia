import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd'
import Test1 from '../../assets/SBIN0813.jpg'
export default function ServiceImage() {
    return (
        <Container fluid>
            <Row style={{ backgroundColor: '#F6D389', padding: '10px' }}>
                <Col sm={4} xs={12}>
                    <Image
                        src={Test1} alt={Test1}
                        preview={false}
                    />
                </Col>
                <Col sm={4} xs={12}>
                    <Image
                        src={Test1} alt={Test1}
                        preview={false}

                    />
                </Col>
                <Col sm={4} xs={12}>
                    <Image
                        src={Test1} alt={Test1}
                        preview={false}

                    />
                </Col>
            </Row>
        </Container>
    )
}