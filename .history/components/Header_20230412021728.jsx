import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY) {
          setShow("-translate-y-[80px]");
        } else {
          setShow("shadow-sm");
        }
      } else {
        setShow("translate-y-0");
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  return (
    <header
      className={`sticky top-0 z-20 flex h-[50px] w-full items-center justify-between bg-white transition-transform duration-300 md:h-[80px] ${show}`}
    >
      <Wrapper className="flex h-[60px] items-center justify-between">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          {/* Icon start */}
          <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:h-12 md:w-12">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="absolute top-1 left-5 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-red-600 px-[2px] text-[10px] text-white md:left-7 md:h-[18px] md:min-w-[18px] md:px-[5px] md:text-[12px]">
              51
            </div>
          </div>

          <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:h-12 md:w-12">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div className="absolute top-1 left-5 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-red-600 px-[2px] text-[10px] text-white md:left-7 md:h-[18px] md:min-w-[18px] md:px-[5px] md:text-[12px]">
              5
            </div>
          </div>
          {/* Icon End */}

          {/* Mobile Icon Start */}
          <div className="relative -mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:hidden md:h-12 md:w-12">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile Icon End */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
