import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrow2 from "../../public/Images/RightArrow2.svg";

interface WhatWeDo {
  image: StaticImageData;
  heading: string;
  description: string;
  link: string;
}

const WhatWeDo = (props: WhatWeDo) => {
  return (
    <div className="bg-white p-5 flex flex-col items-center space-y-4 w-[90%] lg:w-[28%] xl:w-[25%] shadow-xl rounded-md group transition duration-300 hover:bg-blue">
      <Image
        src={props.image}
        alt="image"
        className="w-[30%]"
      />
      <h5 className="font-bold transition duration-300 group-hover:text-white">
        {props.heading}
      </h5>
      <p className="text-center text-sm transition duration-300 group-hover:text-white">
        {props.description}
      </p>
      <Link
        href={`${props.link}`}
        className="flex border border-orange rounded-sm py-1 space-x-2 justify-center"
      >
        <button className="font-semibold text-xs text-orange">
          Read More
        </button>
        <Image
          src={RightArrow2}
          alt="image"
          className="w-[20%] lg:w-[18%]"
        />
      </Link>
    </div>
  );
};

export default WhatWeDo;
