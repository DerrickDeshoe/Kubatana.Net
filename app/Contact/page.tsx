import React from "react";
import Map from "../../public/Images/Contact/Map.svg";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../../public/Images/RightArrow.svg";

const page = () => {
  return (
    <div>
     {/* Phone Landing */}
     <div className="lg:hidden flex bg-phoneContact bg-no-repeat bg-cover bg-center w-[100%] h-[100vh]">
        <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>
      {/* Laptop Landing */}
      <div className="hidden lg:flex bg-background1234 bg-no-repeat bg-cover bg-center w-[100%] h-[60vh]">
        <div className="absolute top-0 w-full h-[60vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>
      <div className="flex flex-wrap p-5 lg:p-10 lg:justify-between space-y-5 lg:space-y-0">
        <div className="w-[100%] lg:w-[50%] flex flex-col justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col space-y-5">
            <p className="bg-lightOrange text-orange rounded-lg py-1 px-2 text-xs font-bold w-[28%] lg:w-[25%] xl:w-[13%] space-y-3 flex justify-center">
              Contact Us
            </p>
            <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
              If You Have Any Query Please Contact Us
            </h2>
          </div>

          <div className="flex flex-col  space-y-3 ">
            <div className="flex justify-between space-x-2 ">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-black p-2 text-xs lg:text-sm outline-none w-[100%] rounded-lg bg-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-black p-2 text-xs lg:text-sm outline-none w-[100%] rounded-lg bg-transparent"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border border-black p-2 pr-[113px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-black p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
              required
            />
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm  py-2 w-[37%] lg:w-[20%]"
            >
              <button
                className="font-semibold text-xs text-white"
                type="submit"
              >
                Send Message
              </button>
              <Image
                src={RightArrow}
                alt="image"
                className="w-[20%] lg:w-[15%]"
              />
            </Link>
          </div>
        </div>

        <Image src={Map} alt="MapImage" className="lg:w-[40%]" />
      </div>
    </div>
  );
};

export default page;
