import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer className="bg-black pt-14 pb-3 text-white">
      <Wrapper className="flex flex-col justify-between gap-[50px] md:flex-row md:gap-0">
        {/* LEFT START */}
        <div className="flex flex-col gap-[50px] md:flex-row md:gap-[75px] lg:gap-[100px]">
          {/* MENU START */}
          <div className="flex shrink-0 flex-col gap-3">
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              Find a store
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              become a partner
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              sign up for email
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              send us feedback
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              student discount
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex shrink-0 gap-[50px] md:gap-[75px] lg:gap-[100px]">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald text-sm font-medium uppercase">
                get help
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Order Status
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Delivery
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Returns
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Payment Options
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Contact Us
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald text-sm font-medium uppercase">
                About nike
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                News
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Careers
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Investors
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Sustainability
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex justify-center gap-4 md:justify-start">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaFacebookF size={20} />
          </div>
          <Link
            href="https://twitter.com"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]">
            <FaYoutube size={20} />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]">
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="mt-10 flex flex-col justify-between gap-[10px] md:flex-row md:gap-0">
        {/* LEFT START */}
        <div className="cursor-pointer text-center text-[12px] text-white/[0.5] hover:text-white md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex flex-wrap justify-center gap-2 text-center md:gap-5 md:text-left">
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Guides
          </div>
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Terms of Sale
          </div>
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Terms of Use
          </div>
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
}
