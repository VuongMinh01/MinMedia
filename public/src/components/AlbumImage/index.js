import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from 'antd';
import Img1 from '../../assets/03/SBIN0602.jpg'
import Img03 from '../../assets/03/SBIN0626.jpg'
import Img05 from '../../assets/05/SBIN1223.JPG'
import Img04 from '../../assets/04/ABIN7967.jpg'

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
        // Trang ảnh Album, dùng để liên kết các ảnh album
        <Container >
            <Row >
                <Col sm={12} xs={12}>
                    <Image className='Image'
                        preview={false}
                        width={'100%'}

                        src={Img1} alt={Img1}
                    ></Image>
                </Col>
            </Row>
            <Row>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        onClick={Album1}

                        width={'100%'}
                        height={360}
                        src={Img03} alt={Img03}
                    ></Image>
                </Col>
                <Col sm={4} xs={12}>
                    <Image className='Image'
                        onClick={Album2}

                        src={Img05} alt={Img05} width={'100%'}
                        height={360} ></Image>

                </Col>
                <Col sm={4} xs={12}>
                    <Image
                        onClick={Album3}

                        className='Image'
                        src={Img04} alt={Img04} width={'100%'}
                        height={360} ></Image>

                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}