import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player';
import '../../css/Videos.css'
export default function Videos() {
    return (
        <>


            <Container fluid >

                <center>  <h3>MỘT SỐ VIDEO NỔI BẬT CỦA CHÚNG TÔI</h3></center>

                <Row>
                    <center><h3>CẢNH QUAY NGÀY CƯỚI</h3></center>
                    <Col sm={6} xs={12}>
                        <ReactPlayer
                            className='video'
                            url='https://www.youtube.com/watch?v=LrNY5FdFcq8'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                    <Col sm={6} xs={12}>
                        <ReactPlayer
                            className='video'

                            url='https://www.youtube.com/watch?v=LrNY5FdFcq8'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />
                    </Col>

                </Row>
                <Row>
                    <center><h3>CẢNH QUAY PHÓNG SỰ</h3></center>
                    <Col sm={6} xs={12}>
                        <ReactPlayer
                            className='video'
                            url='https://www.youtube.com/watch?v=LrNY5FdFcq8'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                    <Col sm={6} xs={12}>
                        <ReactPlayer
                            className='video'

                            url='https://www.youtube.com/watch?v=LrNY5FdFcq8'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />
                    </Col>

                </Row>


            </Container >

        </>
    )
}
