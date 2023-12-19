import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import Img1 from '../../assets/03/SBIN0602.jpg'

export default function AlbumImage() {


    return (
        // Trang ảnh Album, dùng để liên kết các ảnh album
        <Container fluid>
            <Row >
                <Col sm={12} xs={12}>
                    <Image
                        preview={false}
                        width={'100%'}
                        height={'100%'}
                        src={Img1} alt={Img1}
                        style={{ objectFit: 'cover' }}
                    ></Image>
                </Col>
            </Row>
        </Container>
    )
}