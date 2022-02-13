import React from 'react';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ lists, className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <ul className="slider">
      <Slick {...settings}>
        {lists.map((list, index) => (
          <li key={index}>
            <img
              src={`${process.env.PUBLIC_URL}${list.image}`}
              className={`img-fluid ${className}`}
              alt="mv"
            />
          </li>
        ))}
      </Slick>
    </ul>
  );
};

export default Slider;
