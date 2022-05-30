import React from "react";
import tw from "tailwind-styled-components";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import Link from "next/link";

const Menu = () => {
  const SourceMenu = [
    { icon: <AiFillHome />, menu: "HOME", url: "/" },
    { icon: <AiOutlineSearch />, menu: "SEARCH", url: "" },
    { icon: <AiOutlinePlus />, menu: "WATCHLIST", url: "" },
    { icon: <AiFillStar />, menu: "ORIGINALS", url: "" },
    { icon: <RiMovie2Fill />, menu: "MOVIES", url: "" },
    { icon: <BiMoviePlay />, menu: "SERIES", url: "/series" },
    { icon: <BiMoviePlay />, menu: "GENRES", url: "/genres" },
  ];

  return (
    <Wrapper>
      {SourceMenu.map((item, id) => (
        <Link key={id} href={item.url}>
          <NavMenu className="NavMenu">
            {item.icon}
            <SpanText className="spanMenu">{item.menu}</SpanText>
          </NavMenu>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Menu;

const Wrapper = tw.div`
sm:flex w-full justify-start hidden  
`;

const NavMenu = tw.a`
flex items-center cursor-pointer ml-5 
`;
const SpanText = tw.span`
ml-2 tracking-widest relative
`;
