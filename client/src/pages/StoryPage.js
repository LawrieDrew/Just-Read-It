import React from "react";
import Button from "./components/Button";
import { Container, Row, Col } from "./components/Grid";
import Content from "./components/Content";
import Answers from "./components/Answers";
import Image from "./components/Image";
import { text } from "express";

//import components


function StoryPage() {
    return (
        <div>
            <Container>
                <Col>
                    <Row>
                        <Button
                        href="#home"
                        >
                        Home
                        </Button>
                    </Row>
                    <Row>
                        <Content />
                    </Row>
                    <Row>
                        <Image />
                    </Row>
                    <Row>
                        <Answers />
                    </Row>
            <Container>
                <Row>
                    <Button
                    href="#lasttpage"
                    >
                    Last Page
                    </Button>
                    <Button
                    href="#nexttpage"
                    >
                    Next Page
                    </Button>
                </Row>
            </Container>
                </Col>
            </Container>
        </div>
    )
}

export default StoryPage;