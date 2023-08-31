import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'

const ImageCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={require('./../../assets/newcollection.jpg')} alt="Slide 1" />
            </div>
            <div>
                <img src={require('./../../assets/sale.jpg')} alt="Slide 2" />
            </div>
            <div className='sliderThree' style={{ marginTop: '50px' }}>
                <img src={require('./../../assets/buynow.png')} alt="Slide 3" />
            </div>
            {/* Add more slides as needed */}
        </Carousel>
    );
};

export default ImageCarousel;
