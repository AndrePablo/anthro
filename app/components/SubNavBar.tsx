"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link as LinkScroll } from "react-scroll";

function SubNavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-48">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-bold hover:underline hover:text-green-500 cursor-pointer text-lg"
      >
        <LinkScroll
          activeClass="active"
          to="Intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Intro
        </LinkScroll>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold hover:underline hover:text-green-500 cursor-pointer text-lg"
      >
        <LinkScroll
          activeClass="active"
          to="Evidence1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Evidence #1
        </LinkScroll>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold  hover:underline hover:text-green-500 cursor-pointer text-lg"
      >
        <LinkScroll
          activeClass="active"
          to="Evidence2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Evidence #2
        </LinkScroll>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold  hover:underline hover:text-green-500 cursor-pointer text-lg"
      >
        <LinkScroll
          activeClass="active"
          to="References"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          References
        </LinkScroll>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky bg-red-700 inset-0 z-10 h-[50px] max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-none">
      <div className="flex w-full h-full items-center justify-center  text-black font-mono font-extrabold">
        {navList}
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}

export default SubNavBar;
