import React from "react";
import '../../css/Header.css'
import { Container, Row, Col, Image } from "react-bootstrap";
import MocMedia from '../../assets/mocmedia.png'
import NavBar from '../NavBar'
import { Divider } from 'antd';

export default function Header() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12} xs={12}>
                        <Image
                            width={"30%"}
                            src={MocMedia} alt={MocMedia}
                            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
                        >
                        </Image>
                    </Col>
                    <Divider />

                    <Col sm={12} xs={12} >
                        <div>
                            <NavBar />
                        </div>
                    </Col>
                    <Divider />
                </Row>
            </Container>
        </>
    )
}