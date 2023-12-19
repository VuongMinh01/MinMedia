import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player';
import '../../css/Videos.css'
export default function Videos() {
    return (
        <>


            <Container fluid >

                <center>
                    <h3 style={{ color: 'red', fontSize: '40px', fontFamily: 'bold' }}>
                        MỘT SỐ VIDEO NỔI BẬT CỦA CHÚNG TÔI
                    </h3>
                </center>

                <Row>
                    <Col sm={6} xs={12}>
                        <ReactPlayer
                            className='video'
                            url='https://www.youtube.com/watch?v=SepvFbHL-VM'
                            width="100%"
                            height="500px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                    <Col sm={6} xs={12}>
                        <ReactPlayer
                            className='video'

                            url='https://www.youtube.com/watch?v=7AsV5PoUNpk&t=23s'
                            width="100%"
                            height="500px"
                            playing={false}
                            controls={true}

                        />
                    </Col>


                </Row>
                <Row>
                    <Col sm={4} xs={12}>
                        <ReactPlayer
                            className='video'
                            url='https://www.youtube.com/watch?v=Y_uZHUQVQhg&t=2s'
                            width="100%"
                            height="500px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                    <Col sm={4} xs={12}>
                        <ReactPlayer
                            className='video'

                            url='https://www.youtube.com/watch?v=J8xmEbqNZaw&t=8s'
                            width="100%"
                            height="500px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                    <Col sm={4} xs={12}>
                        <ReactPlayer
                            className='video'

                            url='https://www.youtube.com/watch?v=7AsV5PoUNpk&t=23s'
                            width="100%"
                            height="500px"
                            playing={false}
                            controls={true}

                        />
                    </Col>
                </Row>

            </Container >

        </>
    )
}
