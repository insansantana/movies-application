import React from "react";
import Header from "../components/Header";
import tw from "tailwind-styled-components";
import Card from "../components/atoms/card";

import data from "../data/movies.json";

const Genres = () => {
  return (
    <Wrapper>
      <HeaderContainer style={{ minHeight: "80px" }}>
        <Header />
      </HeaderContainer>
      <Section>
        <Title>Genres</Title>
        <Content>
          {data.genres.map((data, i) => (
            <Card
              key={i}
              image={data.cover}
              overlay={true}
              title={data.title}
              margin="m-2"
              width="sm:w-80 w-96"
            />
          ))}
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Genres;

const Wrapper = tw.div`
h-screen
`;
const HeaderContainer = tw.div`
w-full
`;
const Section = tw.section`
relative my-10 sm:mx-10  flex flex-col text-center sm:text-left
`;

const Title = tw.h5`
text-gray-400 text-xl font-bold m-2 
`;

const Content = tw.div`
flex flex-wrap justify-center sm:justify-start
`;
