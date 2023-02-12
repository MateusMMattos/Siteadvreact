import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import image1 from '../assets/night.jpg';

import './Hero.scss';

const Hero = () => (
    <Card className='text-center text-light hero'>
        <Row className='my-lg-5 hero_row'>
            <Col className='hero_1'>impulsionamos transformações</Col>
            <Col>
            <Image className='' src={image1}/>
            <h1>Mattos Filho lança programa de inovação que conecta startups a empresas de diferentes setores</h1>
            </Col>
        </Row>
    </Card>
)

export default Hero;