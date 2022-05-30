import React from "react";
import tw from "tailwind-styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import Header from "../components/Header";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();

  return (
    <ContainerDetails>
      <Header />
      <Content style={{ backgroundImage: `url('${router.query.img}')` }}>
        <Shadow />
        <Wrapper>
          <Cta>
            <ButtonPlay>
              <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
                <div>
                  <BsFillPlayFill />
                </div>
              </IconContext.Provider>
              <SpanPlay>PLAY</SpanPlay>
            </ButtonPlay>
            <ButtonTrailer>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <div>
                  <BsFillPlayFill />
                </div>
              </IconContext.Provider>
              <SpanTrailer>TRAILER</SpanTrailer>
            </ButtonTrailer>
            <ButtonAdd>
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "4.5em",
                  className: "font-bold",
                }}
              >
                <div>
                  <AiOutlinePlusCircle />
                </div>
              </IconContext.Provider>
            </ButtonAdd>
            <ButtonGroup>
              <IconContext.Provider
                value={{
                  color: "black",
                  size: "1.5em",
                  className: "font-bold",
                }}
              >
                <div>
                  <AiOutlineUsergroupAdd />
                </div>
              </IconContext.Provider>
            </ButtonGroup>
          </Cta>
          <SmallText>
            When 11-year-old Riley moves to a new city, her Emotions team up to
            help her through the transition. Joy, Fear, Anger, Disgust and
            Sadness work together, but when Joy and Sadness get lost, they must
            journey through unfamiliar places to get back home.
          </SmallText>
        </Wrapper>
      </Content>
    </ContainerDetails>
  );
};

export default Details;

const ContainerDetails = tw.div`
m-0 p-0 relative 
`;

const Shadow = tw.div`
bg-gray-600 absolute w-full h-full bg-opacity-25
`;

const Content = tw.div`
flex items-center w-full bg-no-repeat bg-cover h-screen relative
`;

const Wrapper = tw.div`
max-w-2xl
`;

const Cta = tw.div`
ml-10 flex items-center flex-nowrap flex-row 
`;

const ButtonPlay = tw.button`
border-2 border-white p-3 flex flex-row justify-center items-center bg-white text-black text-2xl rounded-md tracking-wider shadow-2xl mb-4 mr-4 hover:bg-gray-200  z-20
`;

const ButtonTrailer = tw.button`
border-2 border-white p-3 flex justify-center items-center bg-black-600 text-white text-2xl rounded-md tracking-wider shadow-2xl mb-4 mr-4 hover:bg-gray-600 z-20
`;

const ButtonAdd = tw.button`
-mt-3 mr-2 z-20
`;

const ButtonGroup = tw.button`
border-2 border-white p-3 flex justify-center items-center bg-white text-white text-2xl rounded-full tracking-wider shadow-2xl mb-4 mr-4 z-20
`;

const SpanPlay = tw.span`
ml-1 text-base font-bold
`;

const SpanTrailer = tw.span`
ml-1 text-base font-bold
`;

const SmallText = tw.div`
ml-10 mt-10
`;

const Description = tw.div`

`;
