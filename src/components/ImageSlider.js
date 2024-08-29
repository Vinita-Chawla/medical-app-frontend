import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MultiImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [
    './images/slider/01.jpg', 
    './images/slider/02.jpg',
    './images/slider/03.jpg',
    './images/slider/04.jpg',
    './images/slider/05.jpg',
    './images/slider/06.jpg',
  ];

  return (
    <div className="slider-container mt-[10rem] mx-auto w-[90%]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiImageSlider;
