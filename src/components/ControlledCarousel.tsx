import * as React from "react";
import { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';

interface CarouselProps {

}

const ControlledCarousel = ({} : CarouselProps) => {
  const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex: any, e: any) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CarouselItem>
          <img
            className="d-block w-100"
            src={photo1}
            alt="First slide"
            width={'500px'}
            height={'500px'}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            src={photo2}
            alt="Second slide"
            width={'500px'}
            height={'500px'}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            src={photo3}
            alt="Third slide"
            width={'500px'}
            height={'500px'}
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    );
}

export default ControlledCarousel;