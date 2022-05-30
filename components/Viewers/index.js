import React from "react";
import tw from "tailwind-styled-components";
import Card from "../atoms/card";

const Viewers = () => {
  return (
    <Wrapper>
      <Wrap>
        <ViewersImage src="images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <ViewersImage src="images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <ViewersImage src="images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
        <ViewersImage src="images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <ViewersImage src="images/viewers-national.png" />
      </Wrap>
    </Wrapper>
  );
};

export default Viewers;

const Wrapper = tw.div`
mt-10 flex  justify-between items-center flex-col md:flex-row  flex-wrap md:justify-center 
`;

const Wrap = tw.div`
overflow-hidden border-4 border-gray-400 rounded-xl cursor-pointer transform hover:shadow-2xl hover:scale-105 transition 
my-4  shadow-2xl drop-shadow-2xl max-w-sm md:mr-4 md:max-w-xs
`;

const ViewersImage = tw.img`
h-full w-full
`;
