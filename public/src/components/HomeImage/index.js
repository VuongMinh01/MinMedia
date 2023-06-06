import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import Test1 from '../../assets/SBIN0813.jpg'
import Test2 from '../../assets/SBIN0837.jpg'
import Test3 from '../../assets/SBIN0804.JPG'
import '../../css/HomeImage.css'
export default function HomeImage() {
    return (
        <Container fluid >
            <Row >
                {/* 3 khung ảnh đầu tiên */}
                <Col sm={4} xs={12} >
                    <Image className='Image'
                        preview={false}
                        width={'100%'}
                        height={360}
                        src={Test1} alt={Test1}
                    ></Image>
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Test2} alt={Test2}
                        width={'100%'}
                        height={360} ></Image>

                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Test3} alt={Test3}
                        width={'100%'}
                        height={360} ></Image>

                </Col>
            </Row>

            <Row>
                {/* Khung ảnh giữa */}
                <Col sm={4} xs={12}>

                    <Image className='Image'
                        preview={false}

                        src={Test3} alt={Test3}
                        width={'100%'}
                    ></Image>

                    <Image className='Image'
                        preview={false}

                        src={Test3} alt={Test3}
                        width={'100%'}
                    ></Image>

                </Col>
                <Col>
                    <Image className='Image'
                        preview={false}

                        src={Test3} alt={Test3}
                        width={'100%'}
                        height={610} ></Image>

                </Col>
                <Col sm={4} xs={12}>

                    <Image className='Image'
                        preview={false}

                        src={Test3} alt={Test3}
                        width={'100%'}
                    ></Image>

                    <Image className='Image'
                        preview={false}

                        src={Test3} alt={Test3}
                        width={'100%'}
                    ></Image>

                </Col>
            </Row>
            <Row>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        width={'100%'}
                        height={360}
                        src={Test1} alt={Test1}
                    ></Image>
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Test2} alt={Test2}
                        width={'100%'}
                        height={360} ></Image>

                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Test3} alt={Test3}
                        width={'100%'}
                        height={360} ></Image>

                </Col>
            </Row>
        </Container>
    )
}