import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from 'react-player';
export default function HomeVideo() {
    return (

        // Video thứ nhất trong file Home

        <Container fluid >
            <ReactPlayer
                url='https://www.youtube.com/watch?v=BT5wowluQoU'
                width="100%"
                height="600px"
                playing={true}
                controls={true}

            />

        </Container>


    )
}
