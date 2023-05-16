import React from "react";
import '../../css/Header.css'
import { Container, Row, Col, Image } from "react-bootstrap";
import Minmedia from '../../assets/minmedia.png'
import NavBar from '../NavBar'
import { Divider } from 'antd';

export default function Header() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12} xs={12}>
                        <Image
                            width={"20%"}
                            src={Minmedia} alt={Minmedia}
                            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
                        >
                        </Image>
                    </Col>

                    <Col sm={12} xs={12} >
                        <div >
                            <Divider />
                            <NavBar />
                            <Divider />

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}