import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Menu from "./Menu";

const Header = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    <HeaderLogin
      style={{ backgroundColor: "#040714", boxShadow: "2px 0px 0px #505050" }}
    >
      <Logo src="images/logo.svg" />
      {isLogin ? (
        <>
          <Menu />
          <Profile
            src="https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.18169-9/21767926_1903536206324520_1765369123722936619_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGT46g9uY853h_DwfW92NMwrSK0YfA8T4KtIrRh8DxPgkcoq3Pnry2mRk-qsjE76Rj_uTWv_IZnCxJChC_lZMRw&_nc_ohc=Dsu1yAjwz4YAX9Ga6Ap&_nc_ht=scontent.fcgk30-1.fna&oh=aea976017fd1eb7f7b84b59d97147c2a&oe=61B38740"
            alt="img"
          />
        </>
      ) : (
        <ButtonLogin>LOGIN</ButtonLogin>
      )}
    </HeaderLogin>
  );
};

export default Header;

const HeaderLogin = tw.div`
flex items-center justify-between px-10 py-4 fixed w-full z-10 
`;

const Logo = tw.img`
max-w-5r cursor-pointer
`;

const ButtonLogin = tw.div`
border-2 border-white bg-transparent text-white py-3 px-5 font-semibold rounded-md leading-5 tracking-widest cursor-pointer hover:text-gray-400 hover:border-gray-400
`;

const Profile = tw.img`
border border-white rounded-full w-11 cursor-pointer
`;
