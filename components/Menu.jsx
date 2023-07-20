import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const data = [
  { id: 1, name: "SHOW ALL TYRES", url: "/", subMenu: true },
  { id: 2, name: "FIND A DEALER", url: "/", subMenu: true },
  { id: 3, name: "GUIDES & VIDEOS", subMenu: true },
  { id: 4, name: "GO WITH", url: "/", subMenu: true },
  { id: 5, name: "SERVICE & HELP", subMenu: true },
];

const subMenuData = [
  { id: 1, name: "About" },
  { id: 2, name: "About" },
  { id: 3, name: "About" },
  { id: 4, name: "About" },
];

const Menu = ({
  showCatMenu,
  setShowCatMenu
}) => {
  const [subMenuStates, setSubMenuStates] = useState(
    Array(subMenuData.length).fill(false)
  );

  const handleSubMenuToggle = (index) => {
    const updatedSubMenuStates = [...subMenuStates];
    updatedSubMenuStates[index] = !updatedSubMenuStates[index];
    setSubMenuStates(updatedSubMenuStates);
  };

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => handleSubMenuToggle(index)}
                onMouseLeave={() => handleSubMenuToggle(index)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {subMenuStates[index] && (
                  <ul className="absolute bg-white top-8 left-0 min-w-[150px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link key={submenu.id} href="/">
                          <li className="h-12 flex px-3 hover:bg-black/[0.03] rounded-md">
                            {submenu.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
