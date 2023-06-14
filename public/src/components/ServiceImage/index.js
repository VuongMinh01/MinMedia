import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd'
import Img12 from '../../assets/03/SBIN0640.jpg'
import Img13 from '../../assets/Service/ABIN6845.jpg'
import Img14 from '../../assets/Service/Flycam.jpg'
import '../../css/HomeImage.css'
export default function ServiceImage() {
    return (
        <Container fluid>
            {/* Phần ảnh trong Service nằm dưới 3 gói */}
            <Row style={{ backgroundColor: '#F6D389', padding: '10px' }}>
                <Col sm={4} xs={12}>
                    <Image className='Image'


                        src={Img12} alt={Img12}
                        preview={false}
                        width={'100%'}
                        height={360}

                    />
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'

                        src={Img13} alt={Img13}
                        preview={false}
                        width={'100%'}
                        height={360}
                    />
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'


                        src={Img14} alt={Img14}
                        preview={false}
                        width={'100%'}
                        height={360}

                    />
                </Col>
            </Row>
        </Container>
    )
}