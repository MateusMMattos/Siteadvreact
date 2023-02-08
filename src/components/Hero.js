import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Hero = () => (
    <Card className='text-center text-light hero'>
        <Row className='my-lg-5 d-flex gap-5 hero_row'>
            <Col lg className='text-lg-end my-5'>
                <h2>Tire sua Dúvida On-Line</h2>
                <Button lg className='button1' variant='light'>Fale agora</Button>
            </Col>
            <Col >
                
            </Col>
        </Row>
    </Card>
)

export default Hero;