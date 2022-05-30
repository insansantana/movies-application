import React from "react";
import tw from "tailwind-styled-components";
import Header from "../components/Header";

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Cta>
          <CtaLogo1 src="images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and THe Disney Bundle will increase by $1.
          </Description>
          <CtaLogo2 src="images/cta-logo-two.png" />
        </Cta>
        <BgImage
          style={{
            backgroundImage: `url("images/login-background.jpg")`,
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.section`
flex flex-col overflow-hidden
`;

const Content = tw.div`
box-border relative flex flex-col justify-center items-center w-full min-h-screen mb-20 py-20 px-10
`;

const BgImage = tw.div`
h-full w-full bg-center bg-cover bg-no-repeat z-0 absolute top-0 right-0 left-0 absolute
`;

const Cta = tw.div`
z-10 max-w-screen-lg flex flex-col flex-wrap justify-center mb-2 mt-0 ease-linear duration-100 w-3/4
`;

const CtaLogo1 = tw.img`
mb-1 w-full d-block
`;

const SignUp = tw.div`
bg-blue-600 text-center text-white font-semibold rounded-md py-5 cursor-pointer tracking-widest hover:bg-blue-400
`;

const Description = tw.p`
text-white font-semibold text-center sm:text-md lg:text-lg text-sm  my-6 leading-6 tracking-widest
`;

const CtaLogo2 = tw.img`
mb-1 w-full d-block
`;
