import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { img1, img2, img3 } from '../assests/images';

const Slide = ({ image, caption }) => (
  <div className="relative">
    <img
      src={image}
      alt={caption}
      className="object-cover w-full h-64 md:h-72 lg:h-96 xl:h-108"
    />
  </div>
);


const ResponsiveSlider = () => {
  const sliderContent = [
    { image:  img1, caption: 'Slide 1' },
    { image: img2, caption: 'Slide 2' },
    { image: img3 , caption: 'Slide 3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-8 pt-20 z-[-1]  sm:p-12 sm:pt-28">
      <Slider {...settings}>
        {sliderContent.map((slide, index) => (
          <div key={index} className="mx-2">
            <Slide {...slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
