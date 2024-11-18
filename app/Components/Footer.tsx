"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Images/Logo.svg";
import Facebook from "../../public/Images/facebook.svg";
import Instagram from "../../public/Images/instagram.svg";
import Twitter from "../../public/Images/twitter.svg";
import RightClick from "../../public/Images/RightClick.svg";

const Footer = () => {
  return (
    <div className=" bg-blue space-y-2">
      <div className="flex flex-wrap w-[100%] space-y-5 lg:space-y-0 p-5 lg:p-10 text-white">
        <div className=" lg:w-[24%] flex flex-col space-y-5">
          <Image src={Logo} alt="alt" className="w-[50%] lg:w-[60%]" />
          <p className=" w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            minim
          </p>
          <div className="flex space-x-3">
            <Image src={Facebook} alt="image" className=" w-[7%] " />
            <Image src={Instagram} alt="image" className=" w-[7%] " />
            <Image src={Twitter} alt="image" className=" w-[7%] " />
          </div>
        </div>
        <div className=" lg:w-[24%] flex flex-col space-y-3">
          <h5 className="font-bold">Quick Links</h5>
          <div className="flex flex-col space-y-2">
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange "
            >
              <Image
                src={RightClick}
                alt="image"
                className="w-[8%]  lg:w-[2%]"
              />
              <p>About</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <Image
                src={RightClick}
                alt="image"
                className="w-[8%] lg:w-[2%]"
              />
              <p>Pages</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <Image
                src={RightClick}
                alt="image"
                className="w-[8%] lg:w-[2%]"
              />
              <p>Causes</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <Image
                src={RightClick}
                alt="image"
                className="w-[8%] lg:w-[2%]"
              />
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[24%]">
          <h5 className="font-bold">Address</h5>
        </div>
        <div className=" lg:w-[24%] flex flex-col space-y-4">
          <h5 className="font-bold">News Letter</h5>
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="relative w-[80%] lg:w-[100%]">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 text-xs rounded-md bg-blue  border border-orange text-white w-[100%] outline-none"
              required
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity("Please enter a valid email")
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm py-1 px-2 absolute bottom-[5px] right-[5px] "
            >
              <button className=" font-semibold text-xs text-white ">
                Sign-Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-white w-[100%]"></div>
      <div className="flex flex-wrap justify-center space-y-1 lg:justify-between px-5 lg:px-10 w-[100%] text-xs lg:text-[16px]">
        <div className="flex space-x-1">
          <p className="text-gray">Copyright 2023</p>
          <div className="flex space-x-1">
            <p className="text-lightBlue font-bold">Xcrodema</p>
            <div className="flex">
              <p className="text-orange font-bold">Pigmentosum</p>
              <p className="text-white">.</p>
            </div>
          </div>
          <p className="text-gray">All rights reserved</p>
        </div>
        <div className="flex space-x-1 pb-2">
            <p className="text-gray">Designed By</p>
            <p className="text-orange font-bold">Arthur Kunaka</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
