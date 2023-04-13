import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  return (
    <header
      className={`sticky top-0 z-20 flex h-[50px] w-full items-center justify-between bg-white transition-transform duration-300 md:h-[80px] ${show}`}
    >
      <Wrapper>
        {/* <img src="/logo.svg" className="w-[40px] md:w-[60px]" /> */}
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-[40px] md:w-[60px]"
          width={40}
        />
      </Wrapper>
      Header
    </header>
  );
};

export default Header;
