import React from "react";
import tw from "tailwind-styled-components";

const Card = ({
  image,
  vertical = true,
  overlay = false,
  title = "",
  margin = "",
  width = "",
}) => {
  return (
    <Wrapper $margin={margin} $width={width}>
      {overlay && <CardOverlay />}
      {title && (
        <Section>
          <Title>{title}</Title>
        </Section>
      )}
      <CardImage src={image} alt="Some image" />
    </Wrapper>
  );
};

export default Card;

const Wrapper = tw.div`
rounded-lg cursor-pointer transform transition duration-500 shadow-xl hover:scale-105 overflow-hidden max-w-30r relative ${(
  props
) => props.$margin ?? props.$margin}
${(props) => props.$width ?? props.$width}
`;

const CardImage = tw.img`
w-full h-full
`;

const CardOverlay = tw.div`
absolute bg-black bg-opacity-40 z-10 w-full h-full
`;

const Section = tw.div`
absolute z-20 w-full h-full flex items-center justify-center
`;

const Title = tw.div`
font-bold
`;
