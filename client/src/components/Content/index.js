import { text } from "express";
import React from "react";
import Card from 'react-bootstrap/Card';

function Content() {

    return(
        <Card>
            <Card.Body>
                <Card.Text
                    as={story.pages.text}>
                </Card.Text>
            </Card.Body>
            <Card.Img 
                    variant="bottom"
                    src={story.pages.keyword} />
        </Card>
    )
}

export default Content;