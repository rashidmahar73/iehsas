import { useState } from "react";
import { Button } from "../button";
import { companySubItems, navItems } from "./helpers";
import { CollapseIcon, SearchIcon } from "../../icons";
import { useNavigate } from "react-router-dom";
import { ConditionalRenderer } from "../conditionalRenderer";
import { navPaths } from "../../utils/constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const navigate = useNavigate();

  function handleNavbar() {
    setIsOpen(!isOpen);
  }

  function handleNavigation(path) {
    if (path === navPaths.company) {
      setIsDropdown(!isDropdown);
      return;
    }

    navigate(path);
  }
  return (
    <nav className="bg-gray-800">
      <div className="flex px-5 items-center">
        <div className="relative flex h-16 items-center justify-between w-full">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div className="xs:hidden sm:hidden md:hidden space-x-2 lg:w-[100%] lg:flex lg:justify-end xl:w-[100%] xl:flex xl:justify-end items-center xxl:w-[100%] xxl:flex xxl:justify-end ">
          {navItems?.map((elem, index) => (
            <div
              key={`navLink-${index}`}
              // href={elem.path}
              className="rounded-md cursor-pointer px-3 py-1 text-sm font-medium text-white relative"
              onClick={() => handleNavigation(elem.path)}
            >
              {elem.text}
              <ConditionalRenderer
                condition={isDropdown && elem.path === navPaths.company}
              >
                <div className=" z-10  bg-white absolute">
                  {companySubItems?.map((elem) => (
                    <div
                      key={`navLink-${index}`}
                      className="rounded-md cursor-pointer px-3 py-1 text-sm font-medium text-black relative"
                      onClick={() => handleNavigation(elem.path)}
                    >
                      {elem.text}
                    </div>
                  ))}
                </div>
              </ConditionalRenderer>
            </div>
          ))}
        </div>
        <div className="xs:flex md:flex sm:flex lg:hidden">
          <Button
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none h-[45px] w-[45px] "
            onClick={handleNavbar}
          >
            <CollapseIcon />
          </Button>
        </div>
        <Button>
          <SearchIcon />
        </Button>
      </div>

      <div
        className={`xs:${isOpen ? "flex" : "hidden"} sm:${
          isOpen ? "flex" : "hidden"
        } ${"lg:hidden"}`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems?.map((elem, index) => (
            <div
            key={`navLink-${index}`}
            // href={elem.path}
            className="rounded-md cursor-pointer px-3 py-1 text-sm font-medium text-white relative"
            onClick={() => handleNavigation(elem.path)}
          >
            {elem.text}
            <ConditionalRenderer
              condition={isDropdown && elem.path === navPaths.company}
            >
              <div className=" z-10  bg-white absolute">
                {companySubItems?.map((elem) => (
                  <div
                    key={`navLink-${index}`}
                    className="rounded-md cursor-pointer px-3 py-1 text-sm font-medium text-black relative"
                    onClick={() => handleNavigation(elem.path)}
                  >
                    {elem.text}
                  </div>
                ))}
              </div>
            </ConditionalRenderer>
          </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
