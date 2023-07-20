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
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  const [subMenuStates, setSubMenuStates] = useState(
    Array(subMenuData.length).fill(false)
  );

  const handleSubMenuToggle = (index) => {
    const updatedSubMenuStates = [...subMenuStates];
    updatedSubMenuStates[index] = !updatedSubMenuStates[index];
    setSubMenuStates(updatedSubMenuStates);
  };

  const handleSubMenuClose = () => {
    setSubMenuStates(Array(subMenuData.length).fill(false));
  };

  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-customDarkRed border-t text-white">
      {data.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative "
                onClick={() => handleSubMenuToggle(index)}
              >
                <div className="flex justify-between">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {subMenuStates[index] && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href="/"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                            handleSubMenuClose(); // Submenu kapanacak
                          }}
                        >
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
              <li className="py-4 px-5 border-b">
                <Link
                  href={item?.url}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
