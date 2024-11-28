"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiChevronDown } from "react-icons/fi"; // Import the dropdown icon
import Logo from "../../public/Images/Logo.svg";
import Facebook from "../../public/Images/facebook.svg";
import Instagram from "../../public/Images/instagram.svg";
import Twitter from "../../public/Images/twitter.svg";
import RightArrow from "../../public/Images/RightArrow.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown state
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile dropdown state
  const dropdownRef = useRef(null);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Causes", href: "/Causes" },
    { label: "Pages", href: "/Pages", hasDropdown: true },
    { label: "Contact", href: "/Contact" },
  ];

  const dropdownLinks = [
    { label: "Twitter Page", href: "#" },
    { label: "Facebook Page", href: "#" },
    { label: "Instagram Page", href: "#" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current) {
        let element: HTMLElement | null = event.target as HTMLElement;
  
        // Traverse up the DOM tree to check if the clicked element is inside the dropdown
        while (element) {
          if (element === dropdownRef.current) {
            // If the element matches the dropdown reference, the click is inside
            return;
          }
          element = element.parentElement; // Move up to the parent element
        }
  
        // If we exit the loop, the click was outside the dropdown
        setIsDropdownOpen(false); // Close dropdown
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  

  return (
    <nav className="absolute w-[100%] bg-transparent flex flex-col lg:items-center lg:justify-between text-white z-[80] py-3">
      <div className="flex flex-col w-[100%] space-y-2">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-5 lg:px-10">
          <p className="text-[10px] lg:text-xs text-gray">
            123 Street, Harare, Zimbabwe
          </p>
          <div className="flex space-x-3 lg:space-x-4 justify-end">
            <Image
              src={Facebook}
              alt="Facebook"
              className="w-[10%] lg:w-[15%]"
            />
            <Image
              src={Instagram}
              alt="Instagram"
              className="w-[10%] lg:w-[15%]"
            />
            <Image src={Twitter} alt="Twitter" className="w-[10%] lg:w-[15%]" />
          </div>
        </div>

        <div className="border-b border-white lg:w-[100%]"></div>

        {/* Main Nav */}
        <div className="hidden lg:flex justify-between items-center w-[100%] px-10">
          <div>
            <Link href="./">
              <Image src={Logo} alt="Logo" className="w-[40%] lg:w-[50%]" />
            </Link>
          </div>
          <div className="flex space-x-7 items-center">
            <div className="hidden lg:flex lg:items-center space-x-5 font-semibold">
              {links.map((link) =>
                link.hasDropdown ? (
                  <div
                    ref={dropdownRef}
                    className="relative flex items-center space-x-1"
                    key={link.href}
                  >
                    <button
                      onClick={toggleDropdown}
                      className="text-white hover:text-orange flex items-center space-x-1 group"
                    >
                      <span>{link.label}</span>
                      <FiChevronDown className="text-lg text-white group-hover:text-orange mt-1" />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-8 bg-white text-black shadow-md rounded w-40">
                        {dropdownLinks.map((dropdownLink) => (
                          <Link
                            key={dropdownLink.href}
                            href={dropdownLink.href}
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-orange"
                          >
                            {dropdownLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <Link
              href="/Donate"
              className="flex space-x-2 justify-center border border-orange rounded-sm py-1"
            >
              <button className="font-semibold text-xs text-orange">
                Donate Now
              </button>
              <Image
                src={RightArrow}
                alt="Arrow"
                className="w-[40%] lg:w-[18%]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden absolute top-10 right-4">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-overlay focus:outline-none"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="absolute flex lg:hidden top-11 left-5 w-[80%]">
        <Link href="./">
          <Image src={Logo} alt="Logo" className="w-[50%] lg:w-[50%]" />
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 bottom-0 right-0 w-2/3 max-w-xs bg-black h-full transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 flex flex-col items-center justify-center text-white`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-2xl focus:outline-none"
        >
          <FiX />
        </button>

        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          {links.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  onClick={toggleMobileDropdown}
                  className="text-zinc-200 hover:text-orange transition-colors flex items-center space-x-1 group"
                >
                  <span>{link.label}</span>
                  <FiChevronDown className="text-sm text-white group-hover:text-orange mt-1" />
                </button>
                {isMobileDropdownOpen && (
                  <div className="bg-white rounded shadow-md text-sm mt-2 absolute left-[26%]">
                    {dropdownLinks.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.href}
                        href={dropdownLink.href}
                        onClick={toggleMenu}
                        className="block px-4 py-2 text-black hover:bg-orange"
                      >
                        {dropdownLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-zinc-200 hover:text-zinc-500 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/Donate"
            onClick={toggleMenu}
            className="border border-orange text-orange text-xs font-mulishSemiBold w-full text-center py-1 px-4 rounded"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
