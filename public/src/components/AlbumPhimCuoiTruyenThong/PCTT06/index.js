import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import Img1 from '../../../assets/03/SBIN0577.jpg'
import Img2 from '../../../assets/03/SBIN0545.jpg'
import Img3 from '../../../assets/03/SBIN0626.jpg'
import Img4 from '../../../assets/03/SBIN9790.jpg'
import Img5 from '../../../assets/03/SBIN9933.jpg'
import Img6 from '../../../assets/03/SBIN1432.jpg'
import Img7 from '../../../assets/03/SBIN1396.jpg'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function PCTT06() {
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
                                width={'100%'}
                                src={Img1} alt={Img1}
                            ></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={12}>
                            <Image className='Image'
                                width={'100%'}
                                height={360}
                                src={Img2} alt={Img2}
                            ></Image>
                        </Col>
                        <Col sm={4} xs={12}>
                            <Image className='Image'
                                src={Img3} alt={Img3}
                                width={'100%'}

                                height={360} ></Image>

                        </Col>
                        <Col sm={4} xs={12}>
                            <Image

                                className='Image'
                                src={Img4} alt={Img4}
                                width={'100%'}

                                height={360} ></Image>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={12}>
                            <Image className='Image'
                                width={'100%'}
                                height={360}
                                src={Img5} alt={Img5}
                            ></Image>
                        </Col>
                        <Col sm={4} xs={12}>
                            <Image className='Image'
                                src={Img6} alt={Img6}
                                width={'100%'}

                                height={360} ></Image>

                        </Col>
                        <Col sm={4} xs={12}>
                            <Image

                                className='Image'
                                src={Img7} alt={Img7}
                                width={'100%'}

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