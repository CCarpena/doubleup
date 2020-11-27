import React from 'react';
import {Image, Row, Col, Jumbotron, Container, Card, Listgroup, Button} from 'react-bootstrap';

function Play() {
    return (
        <div className="container">
            <h1>Play</h1>
            <Container>
                <Row id="doubleButton">
                    <Col> <Button variant="primary">Double Up?</Button>{' '}</Col>
                    <Col> <Button variant="primary">Save</Button>{' '}</Col>
                   
                </Row>
                <br/>
                <Row>
                    <Col>Total Amount Here</Col>
                    <Col>High Score Here</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Play;
