import tw from "tailwind-styled-components";
import Link from "next/link";
import Login from "./login";
import Header from "../components/Header";
import Sliders from "../components/Slider";
import Viewers from "../components/Viewers";
import Movies from "../components/Movies";

import data from "../data/movies.json";

export default function Home() {
  return (
    <Container style={{ backgroundImage: "url('images/home-background.png')" }}>
      {/* <Link href="/"> */}
      {/* <Login /> */}
      <WrapHeader>
        <Header />
      </WrapHeader>
      <Sliders sliders={data.bighero_sliders} />
      <Viewers />
      <Movies movies={data.movies} />
      {/* </Link> */}
    </Container>
  );
}

const Container = tw.div`
m-0 p-0 bg-center-top  bg-cover bg-no-repeat h-screen overflow-x-hidden
`;

const WrapHeader = tw.div`fixed z-50`;
