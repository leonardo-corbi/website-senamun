"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import IconHeader from "./icon-header.svg";
import { menuData } from "./menuData";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: any
  ) => {
    if (item.submenu) {
      e.preventDefault();
      toggleDropdown(item.name);
    }
  };

  return (
    <nav className="bg-blue-custom">
      <div className="2xl:max-w-screen-2xl max-w-screen-xl mx-auto px-2 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-light-blue-custom focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center md:justify-between justify-center md:items-stretch lg">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-4 opacity-95 hover:scale-105 transition-all duration-200"
              >
                <Image
                  className="image hover:rotate-6 hover:scale-105 transition-transform duration-300"
                  src={IconHeader}
                  alt="Icone do Header"
                  width={45}
                />
                <p className="text-white font-medium text-xl tracking-widest text-center position">
                  S E N A M U N
                </p>
              </Link>
            </div>
            <div className="hidden md:flex md:ml-6 items-center">
              <div className="flex space-x-4">
                {menuData.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseLeave={closeDropdown}
                  >
                    <a
                      href={item.href}
                      className={`text-white hover:bg-light-blue-custom lg:px-5 px-2 py-2 rounded-lg text-md tracking-widest duration-150 relative ${
                        item.submenu ? "cursor-pointer" : ""
                      }`}
                      onClick={(e) => handleLinkClick(e, item)}
                    >
                      {item.name}
                      {item.submenu && (
                        <FiChevronDown
                          className={`inline-block ml-1 h-4 w-4 transform transition-transform ${
                            dropdownOpen === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>
                    {item.submenu && dropdownOpen === item.name && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 transform scale-100 opacity-100">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-200 ${
          isOpen
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuData.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 hover:bg-light-blue-custom hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(item.name);
                }}
              >
                {item.name}
                {item.submenu && (
                  <FiChevronDown
                    className={`inline-block ml-1 h-4 w-4 transform transition-transform ${
                      dropdownOpen === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
              {item.submenu && dropdownOpen === item.name && (
                <div className="pl-5">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="text-gray-300 hover:bg-light-blue-custom hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
