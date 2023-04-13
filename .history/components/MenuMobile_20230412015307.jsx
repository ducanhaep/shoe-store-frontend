import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];
export default function MenuMobile({
  showCatMenu,
  setShowCatMenu,
  setShowCatMenu,
}) {
  return (
    <ul className="hidden items-center gap-8 font-medium text-black md:flex">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="relative flex cursor-pointer items-center gap-2"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                <div>
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="absolute top-6 left-0 min-w-[250px] bg-white px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((subMenu, index) => {
                      return (
                        <Link
                          key={index}
                          href="/"
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="flex h-12 items-center justify-between rounded-md px-3 hover:bg-black/[0.03]">
                            {subMenu?.name}
                            <span className="text-sm opacity-50">
                              {subMenu?.doc_count}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link onClick={() => setShowCatMenu(false)} href={item?.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
