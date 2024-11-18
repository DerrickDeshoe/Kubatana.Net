import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import RightArrow2 from "../../public/Images/RightArrow2.svg";
import Link from "next/link";

interface FtCard {
  name: String;
  title: String;
  description: String;
  image: StaticImageData;
}

const FeatureCard = (props: FtCard) => {
  return (
    <div className="flex flex-col items-center border-t-4 border-orange bg-white rounded-t-md text-center space-y-3 w-[90%] lg:w-[28%] xl:w-[25%] relative">
      <p className="bg-orange text-white text-center rounded-sm absolute top-[-4px] px-2">
        {props.name}
      </p>

      <div className="flex flex-col space-y-3 items-center pt-[8%]">
        <h4 className="font-semibold xl:text-[18px]">{props.title}</h4>
        <p className="text-sm leading-relaxed -tracking-wide w-[85%] lg:w-[90%]">
          {props.description}
        </p>

        {/* Image container with overlay and button */}
        <div className="relative group w-full h-[200px] lg:h-[250px] overflow-hidden rounded-md">
          {/* Actual Image */}
          <Image
            src={props.image}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              href="/Contact"
              className="flex space-x-2 justify-center border border-orange rounded-sm py-1 "
            >
              <button className=" font-semibold text-xs text-orange ">
                Read More
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
    </div>
  );
};

export default FeatureCard;
