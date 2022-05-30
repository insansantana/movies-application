import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Card from "../atoms/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movies = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Wrapper>
      {movies.map((data, i) => (
        <div key={i}>
          <Title>{data.title}</Title>
          <Content {...settings}>
            {data.images.map((img, i) => (
              <Link
                href={{
                  pathname: "/details",
                  query: { img: img },
                }}
                key={i}
              >
                <Card image={img} vertical={false} />
              </Link>
            ))}
          </Content>
        </div>
      ))}
    </Wrapper>
  );
};

export default Movies;

const Wrapper = tw.div`
mt-10 mb-20 
`;

const Title = tw.h2`
my-4 mx-6 text-lg font-bold sm:text-xl  lg:mx-8 lg:mt-10
`;

const Content = tw(Slider)` 

`;
