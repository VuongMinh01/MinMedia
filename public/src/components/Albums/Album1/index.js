import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import Test1 from '../../../assets/SBIN0813.jpg'
import Test2 from '../../../assets/SBIN0813.jpg'
import Test3 from '../../../assets/SBIN0837.jpg'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function Album1() {
    return (
        <>
            <Container fluid >
                <Header />
                <Image.PreviewGroup preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}>

                    <Row >
                        <Col sm={12} xs={12}>
                            <Image className='Image'

                                src={Test1} alt={Test1}
                            ></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={12}>
                            <Image className='Image'
                                width={360}
                                height={360}
                                src={Test1} alt={Test1}
                            ></Image>
                        </Col>
                        <Col sm={4} xs={12}>
                            <Image className='Image'
                                src={Test2} alt={Test2} width={360}
                                height={360} ></Image>

                        </Col>
                        <Col sm={4} xs={12}>
                            <Image

                                className='Image'
                                src={Test3} alt={Test3} width={360}
                                height={360} ></Image>

                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Image.PreviewGroup>
                <Footer />
            </Container>
        </>
    )
}