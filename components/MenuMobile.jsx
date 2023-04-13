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
  setMobileMenu,
  categories,
}) {
  return (
    <ul className="absolute top-[50px] left-0 flex h-[calc(100vh-50px)] w-full flex-col border-t bg-white font-bold text-black md:hidden">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="relative flex cursor-pointer flex-col border-b py-4 px-5"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="-mx-5 mt-4 -mb-4 bg-black/[0.05]">
                    {categories.map(({ attributes: category, id }) => {
                      return (
                        <Link
                          key={id}
                          href={`/category/${category.slug}`}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="flex justify-between border-t py-4 px-8">
                            {category?.name}
                            <span className="text-sm opacity-50">
                              {category?.products.data.length}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="border-b py-4 px-5">
                <Link onClick={() => setMobileMenu(false)} href={item?.url}>
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
