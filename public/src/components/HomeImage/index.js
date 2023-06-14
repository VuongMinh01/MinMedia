import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import Img1 from '../../assets/03/SBIN9943.jpg'
import Img2 from '../../assets/03/SBIN9933.jpg'
import Img3 from '../../assets/03/SBIN9794.jpg'
import Img4 from '../../assets/03/SBIN9669.jpg'
import Img5 from '../../assets/03/SBIN9604.jpg'
import Img6 from '../../assets/03/SBIN9556.jpg'
import Img7 from '../../assets/03/SBIN0499.jpg'
import Img8 from '../../assets/03/SBIN0602.jpg'
import Img9 from '../../assets/03/SBIN1499.jpg'
import Img10 from '../../assets/03/SBIN1417.jpg'
import Img11 from '../../assets/03/SBIN1574.jpg'

import '../../css/HomeImage.css'
export default function HomeImage() {
    return (
        // Hình ảnh trong file page Home
        <Container fluid >
            <Row >
                {/* 3 khung ảnh đầu tiên */}
                <Col sm={4} xs={12} >
                    <Image className='Image'
                        preview={false}
                        width={'100%'}
                        height={360}
                        src={Img1} alt={Img1}
                    ></Image>
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Img2} alt={Img2}
                        width={'100%'}
                        height={360}

                    ></Image>

                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Img3} alt={Img3}
                        width={'100%'}
                        height={360}
                    ></Image>

                </Col>
            </Row>

            <Row>
                {/* Khung ảnh giữa */}
                <Col sm={4} xs={12}>

                    <Image className='Image'
                        preview={false}

                        src={Img4} alt={Img4}
                        width={'100%'}
                        height={360}

                    ></Image>
                    <Image className='Image'
                        preview={false}

                        src={Img5} alt={Img5}
                        width={'100%'}
                        height={360}

                    ></Image>
                </Col>
                <Col>
                    <Image className='Image'
                        preview={false}

                        src={Img6} alt={Img6}
                        width={'100%'}
                        height={720}

                    ></Image>


                </Col>
                <Col sm={4} xs={12}>

                    <Image className='Image'
                        preview={false}

                        src={Img7} alt={Img7}
                        width={'100%'}
                        height={360}
                    ></Image>

                    <Image className='Image'
                        preview={false}

                        src={Img8} alt={Img8}
                        width={'100%'}
                        height={360}
                    ></Image>
                </Col>
            </Row>
            <Row>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        width={'100%'}
                        height={360}
                        src={Img9} alt={Img9}
                    ></Image>
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Img10} alt={Img10}
                        width={'100%'}
                        height={360} ></Image>

                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        preview={false}

                        src={Img11} alt={Img11}
                        width={'100%'}
                        height={360} ></Image>

                </Col>
            </Row>
        </Container >
    )
}