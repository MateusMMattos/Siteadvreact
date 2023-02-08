import {Carousel } from 'react-bootstrap';
import image1 from '../assets/balance.jpeg';
import image2 from '../assets/beach.jpg';
import image3 from '../assets/night.jpg';

import './Hero.scss';

const CarouselFadeExample = () => (
    <Carousel fade className='hero'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          height={400}
        />
        <Carousel.Caption>
          <h2 className='titleSlide'>Tire sua Dúvida On-Line</h2>
          <button className='buttonSlide' href='#'>
            Fale agora
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          height={400}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          height={400}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);

export default CarouselFadeExample;