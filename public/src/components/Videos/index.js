import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoTest from '../../assets/test.mov'
import ReactPlayer from 'react-player';
import '../../css/Videos.css'
export default function Videos() {
    return (
        <>


            <Container fluid >
                <Col sm={12} xs={12} className="videoInform">
                    <h3>Chào mừng bạn đến với bộ sưu tập video của chúng tôi</h3>
                </Col>
                <Row>
                    <Col sm={4} xs={12}>
                        <ReactPlayer
                            style={{ padding: '10px' }}
                            url='https://www.youtube.com/watch?v=LrNY5FdFcq8'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                    <Col sm={4} xs={12}>
                        <ReactPlayer
                            style={{ padding: '10px' }}

                            url='https://www.youtube.com/watch?v=LrNY5FdFcq8'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                    <Col sm={4} xs={12}>
                        <ReactPlayer
                            style={{ padding: '10px' }}

                            url='https://www.youtube.com/watch?v=LrNY5FdFcq8'
                            width="100%"
                            height="420px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                </Row>
                <Col sm={12} xs={12}>
                </Col>
            </Container>

        </>
    )
}
