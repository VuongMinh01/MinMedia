import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import Test1 from '../../assets/SBIN0813.jpg'
import Test2 from '../../assets/SBIN0837.jpg'
import Test3 from '../../assets/SBIN0804.JPG'
import { useNavigate } from "react-router-dom";
export default function AlbumImage() {
    const navigate = useNavigate();

    const Album1 = () => {
        navigate('/albums/album1')
    }
    const Album2 = () => {
        navigate('/albums/album2')
    }
    const Album3 = () => {
        navigate('/albums/album3')
    }
    return (
        <Container >
            <Row >
                <Col sm={12} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Test1} alt={Test1}
                    ></Image>
                </Col>
            </Row>
            <Row>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        onClick={Album1}

                        width={360}
                        height={360}
                        src={Test1} alt={Test1}
                    ></Image>
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        onClick={Album2}

                        src={Test2} alt={Test2} width={360}
                        height={360} ></Image>

                </Col>
                <Col sm={4} xs={12}>
                    <Image
                        onClick={Album3}

                        className='Image'
                        src={Test3} alt={Test3} width={360}
                        height={360} ></Image>

                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}