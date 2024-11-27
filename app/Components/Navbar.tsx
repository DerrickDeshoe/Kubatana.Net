"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import Logo from "../../public/Images/Logo.svg";
import Facebook from "../../public/Images/facebook.svg";
import Instagram from "../../public/Images/instagram.svg";
import Twitter from "../../public/Images/twitter.svg";
import RightArrow from "../../public/Images/RightArrow.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Causes", href: "/Causes" },
    { label: "Pages", href: "/Pages" },
    { label: "Contact", href: "/Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" absolute w-[100%] bg-transparent flex flex-col lg:items-center lg:justify-between text-white z-[80] py-3 ">
      <div className="flex flex-col w-[100%] space-y-2">
        <div className="flex justify-between items-center px-5  lg:px-10">
          <p className="text-[10px] lg:text-xs text-gray">
            123 Street, Harare, Zimbabwe
          </p>
          <div className="flex space-x-3 lg:space-x-4 justify-end">
            <Image src={Facebook} alt="image" className=" w-[10%] lg:w-[15%]" />
            <Image
              src={Instagram}
              alt="image"
              className=" w-[10%] lg:w-[15%]"
            />
            <Image src={Twitter} alt="image" className=" w-[10%] lg:w-[15%]" />
          </div>
        </div>
        <div className="border-b border-white lg:w-[100%]"></div>
        <div className="hidden lg:flex justify-between items-center w-[100%] px-10">
          <div className="">
            <Link href="./">
              <Image src={Logo} alt="image" className="w-[40%] lg:w-[50%]" />
            </Link>
          </div>
          <div className="flex space-x-7 items-center">
            <div className="hidden lg:flex lg:items-center space-x-5 font-semibold">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/Donate"
              className="flex space-x-2 justify-center border border-orange rounded-sm py-1 "
            >
              <button className=" font-semibold text-xs text-orange">
                Donate Now
              </button>
              <Image
                src={RightArrow}
                alt="image"
                className="w-[40%] lg:w-[18%]"
              />
            </Link>
          </div>
        </div>
      </div>

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

      <div className="lg:hidden absolute top-11 left-[21px] w-[35%]">
        <Link href="./">
          <Image src={Logo} alt="image" className="" />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 bottom-0 right-0 w-2/3 max-w-xs bg-black h-full transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 flex flex-col items-center justify-center  text-white`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-2xl focus:outline-none"
        >
          <FiX />
        </button>

        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-200 hover:text-zinc-500 transition-colors"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
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
