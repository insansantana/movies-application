import React from "react";
import tw from "tailwind-styled-components";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ sliders }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Carousel {...settings}>
      {sliders.map((data, i) => (
        <Wrap key={i} className="WrapImageSlider">
          <img
            src={data.path}
            className="w-full rounded-lg cursor-pointer min-h-150"
          />
        </Wrap>
      ))}
    </Carousel>
  );
};

export default Slider;

const Carousel = tw(Slide)`
mt-24 mb-5
`;

const Wrap = tw.div`
transition duration-500 ease-in-out w-full
`;
