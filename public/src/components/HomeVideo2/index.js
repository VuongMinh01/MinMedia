import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from 'react-player';
export default function HomeVideo2() {
    return (



        <Container fluid>
            <ReactPlayer
                url='https://www.youtube.com'
                width="100%"
                height="420px"
                playing={false}
                controls={true}

            />

        </Container>


    )
}
