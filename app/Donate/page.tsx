"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../../public/Images/RightArrow.svg";
import WhatWeDo from "../Components/WhatWeDo";
import WWD1 from "../../public/Images/WWD1.svg";
import WWD2 from "../../public/Images/WWD2.svg";
import WWD3 from "../../public/Images/WWD3.svg";

const page = () => {
  return (
    <div className="flex flex-col gap-y-5 lg:gap-y-0">
      {/* Phone Landing */}
      <div className=" flex bg-phoneDonatte bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] lg:hidden">
        <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>
      {/* Laptop Landing */}
      <div className="hidden lg:flex bg-background1234 bg-no-repeat bg-cover bg-center w-[100%] h-[60vh]">
        <div className="absolute top-0 w-full h-[60vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>
      {/* Donate Section */}
      <div className="hidden lg:bg-home bg-no-repeat bg-cover h-[100vh] lg:h-[60vh] w-[100%] lg:flex flex-wrap px-2 py-10 lg:px-10 justify-center gap-5 mt-10">
        <div className="w-[90%] lg:w-[48%] flex flex-col text-white lg:justify-between lg:h-[44vh] xl:h-[38vh] space-y-4">
          <div className="flex flex-col space-y-5">
            <p className="bg-lightOrange text-orange rounded-lg py-1 px-2 text-xs lg:text-sm font-bold w-[28%] lg:w-[25%] xl:w-[18%] space-y-3">
              Donate Now
            </p>
            <h2 className="font-bold text-2xl lg:text-3xl lg:w-[80%]">
              Thanks For The Results Achieved With You
            </h2>
          </div>
          <p className="lg:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
            adipis elit, sed do minim
          </p>
        </div>

        <div className="w-[90%] lg:w-[48%] bg-white p-5 flex flex-col justify-between space-y-4">
          {/* Name Input */}
          <label className="flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
              required
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity("Name is required")
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
            />
            <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
              Please enter your name.
            </span>
          </label>

          {/* Email Input */}
          <label className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
              required
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity("Please enter a valid email")
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
            />
            <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
              Please enter a valid email.
            </span>
          </label>

          {/* Donation Amounts */}
          <div className="flex flex-wrap items-center justify-between space-y-4 lg:space-y-0">
            {/* Fixed Amounts */}
            <div className="flex justify-between space-x-4 w-[100%] lg:w-[65%]">
              {/* Option 1: $10 */}
              <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light  hover:bg-orange hover:text-white">
                <input
                  type="radio"
                  name="donation"
                  value="10"
                  className="hidden peer"
                  required
                />
                $10
              </label>

              {/* Option 2: $20 */}
              <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
                <input
                  type="radio"
                  name="donation"
                  value="20"
                  className="hidden peer"
                />
                $20
              </label>

              {/* Option 3: $30 */}
              <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
                <input
                  type="radio"
                  name="donation"
                  value="30"
                  className="hidden peer"
                />
                $30
              </label>
            </div>

            {/* Dropdown for Custom Amounts */}
            <div className="w-full lg:w-[30%]">
              <select
                name="customDonation"
                className="w-full p-2 text-xs font-semibold text-gray-600 rounded-lg bg-light hover:border-orange"
              >
                <option value="" disabled selected>
                  Select Amount
                </option>
                <option value="40">$40</option>
                <option value="50">$50</option>
                <option value="60">$60</option>
                <option value="70">$70</option>
                <option value="80">$80</option>
                <option value="90">$90</option>
                <option value="100">$100</option>
              </select>
            </div>
          </div>

          {/* Donate Button */}
          <Link
            href="#"
            className="flex space-x-2 justify-center bg-orange rounded-sm  py-2 w-[37%] lg:w-[20%]"
          >
            <button className="font-semibold text-xs text-white" type="submit">
              Donate Now
            </button>
            <Image
              src={RightArrow}
              alt="image"
              className="w-[20%] lg:w-[15%]"
            />
          </Link>
        </div>
      </div>
      {/* Donate Phone */}
      <div className="lg:hidden bg-phoneDonate bg-no-repeat bg-cover h-[100vh] lg:h-[60vh] w-[100%] flex flex-wrap px-2 py-10 lg:px-10 justify-center relative">
        <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-60 flex flex-col justify-center items-center gap-5 ">
          <div className="w-[90%] lg:w-[48%] flex flex-col text-white lg:justify-between lg:h-[44vh] xl:h-[38vh] space-y-4">
            <div className="flex flex-col space-y-5">
              <p className="bg-lightOrange text-orange rounded-lg py-1 px-2 text-xs lg:text-sm font-bold w-[28%] lg:w-[25%] xl:w-[18%] space-y-3">
                Donate Now
              </p>
              <h2 className="font-bold text-2xl lg:text-3xl lg:w-[80%]">
                Thanks For The Results Achieved With You
              </h2>
            </div>
            <p className="lg:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
              adipis elit, sed do minim
            </p>
          </div>
          <div className="w-[90%] lg:w-[48%] bg-white p-5 flex flex-col justify-between space-y-4">
            {/* Name Input */}
            <label className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
                required
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity("Name is required")
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
              />
              <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
                Please enter your name.
              </span>
            </label>

            {/* Email Input */}
            <label className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
                required
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity(
                    "Please enter a valid email"
                  )
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
              />
              <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
                Please enter a valid email.
              </span>
            </label>

            {/* Donation Amounts */}
            <div className="flex flex-wrap items-center justify-between space-y-4 lg:space-y-0 ">
              {/* Fixed Amounts */}
              <div className="flex justify-between space-x-4 w-full lg:w-[65%]">
                {/* Option 1: $10 */}
                <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light  hover:bg-orange hover:text-white">
                  <input
                    type="radio"
                    name="donation"
                    value="10"
                    className="hidden peer"
                    required
                  />
                  $10
                </label>

                {/* Option 2: $20 */}
                <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
                  <input
                    type="radio"
                    name="donation"
                    value="20"
                    className="hidden peer"
                  />
                  $20
                </label>

                {/* Option 3: $30 */}
                <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
                  <input
                    type="radio"
                    name="donation"
                    value="30"
                    className="hidden peer"
                  />
                  $30
                </label>
              </div>

              {/* Dropdown for Custom Amounts */}
              <div className="w-full lg:w-[30%]">
                <select
                  name="customDonation"
                  className="w-full p-2 text-xs font-semibold text-gray-600 rounded-lg bg-light hover:border-orange"
                >
                  <option value="" disabled selected>
                    Select Amount
                  </option>
                  <option value="40">$40</option>
                  <option value="50">$50</option>
                  <option value="60">$60</option>
                  <option value="70">$70</option>
                  <option value="80">$80</option>
                  <option value="90">$90</option>
                  <option value="100">$100</option>
                </select>
              </div>
            </div>

            {/* Donate Button */}
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm py-2 w-[37%] lg:w-[30%]"
            >
              <button
                className="font-semibold text-xs text-white"
                type="submit"
              >
                Donate Now
              </button>
              <Image
                src={RightArrow}
                alt="image"
                className="w-[20%] lg:w-[15%]"
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
