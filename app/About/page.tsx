import React from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../../public/Images/RightArrow.svg";
import RightArrow2 from "../../public/Images/RightArrow2.svg";
import Crew from "../../public/Images/Rectangle 6.svg";
import Make from "../../public/Images/MakeChange.svg";
import WhatWeDo from "../Components/WhatWeDo";
import WWD1 from "../../public/Images/WWD1.svg";
import WWD2 from "../../public/Images/WWD2.svg";
import WWD3 from "../../public/Images/WWD3.svg";

const page = () => {
  return (
    <div>
      {/* Phone Landing */}
      <div className="lg:hidden flex bg-phoneAbout bg-no-repeat bg-cover bg-center w-[100%] h-[100vh]">
        <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>
      {/* Laptop Landing */}
      <div className="hidden lg:flex bg-background1234 bg-no-repeat bg-cover bg-center w-[100%] h-[60vh]">
        <div className="absolute top-0 w-full h-[60vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>

      {/* About Us */}
      <div className="flex flex-wrap-reverse p-7 gap-5 lg:p-5 xl:p-10 lg:mt-20 lg:justify-between xl:space-x-5 w-[100%]">
        <div className="lg:w-[48%] relative flex items-end mt-8 lg:mt-0">
          <Image
            src={Crew}
            alt="image"
            className="w-[85%] lg:w-[90%] xl:w-[80%]"
          />
          <Image
            src={Make}
            alt="image"
            className="absolute w-[33%] top-[-30px] right-[-5px] lg:top-[-30px] lg:right-[-20px] xl:top-[-55px] xl:right-10 lg:w-[38%] xl:w-[30%]"
          />
        </div>
        <div className="flex flex-col space-y-5 lg:w-[48%] relative justify-between mt-10 lg:mt-0">
          <button className="bg-lightOrange w-[25%] lg:w-[16%] rounded-xl text-orange font-bold py-1 absolute top-[-30px] lg:left-0 lg:top-[-30px] xl:top-[-55px] text-xs">
            About Us
          </button>
          <h3 className="font-bold text-[20px] lg:text-2xl xl:text-4xl">
            We Help People In Need Around The World
          </h3>
          <div className="flex flex-col bg-light border-b-4 border-orange p-3 rounded-lg space-y-2 lg:w-[90%]">
            <p className="lg:w-[85%] text-xs lg:text-sm leading-relaxed tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              minim veniam, quis nostrud Lorem ipsum dolor sit amet
            </p>
            <div className="flex space-x-3">
              <p className="font-bold text-xs lg:text-sm">Arthur T Kunaka</p>
              <p className="text-xs lg:text-sm">CEO/Founder</p>
            </div>
          </div>
          <p className="text-xs lg:text-sm lg:w-[78%] leading-relaxed tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do minim veniam, quis nostrud
          </p>
          <div className="flex space-x-3 py-3">
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm py-1"
            >
              <button className="font-semibold text-xs text-white">
                Learn More
              </button>
              <Image
                src={RightArrow}
                alt="image"
                className="w-[20%] lg:w-[18%]"
              />
            </Link>
            <Link
              href="/Contact"
              className="flex space-x-2 justify-center border border-orange rounded-sm py-1"
            >
              <button className="font-semibold text-xs text-orange">
                Donate Now
              </button>
              <Image
                src={RightArrow2}
                alt="image"
                className="w-[20%] lg:w-[18%]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="px-5 py-8 flex flex-col space-y-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <p className="bg-lightOrange text-orange rounded-lg px-2 text-xs lg:text-sm font-bold">
            What We Do
          </p>
          <h2 className="font-bold text-2xl lg:text-3xl lg:w-[40%]">
            Learn More About What We Do And Get Involved
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <WhatWeDo
            image={WWD1}
            heading="Child Education"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            link="#"
          />
          <WhatWeDo
            image={WWD2}
            heading="Pure Drinking Water"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            link="#"
          />
          <WhatWeDo
            image={WWD3}
            heading="Medical Treatment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
