import React from "react";
import Image, { StaticImageData } from "next/image";

interface Testimoinals {
  image: StaticImageData;
  description: String;
  name: String;
  jobTitle: String;
}

const Testimonials = (props: Testimoinals) => {
  return (
    <div className="flex flex-col space-y-5 items-center lg:w-[90%]">
      <Image src={props.image} alt="image" className="w-[30%] hover:border-4 hover:border-orange hover:rounded-[100%]"/>
      <div className="flex flex-col space-y-3 text-center bg-light p-5 rounded-md hover:bg-orange hover:text-white">
        <p>{props.description}</p>
        <h4 className="font-bold">{props.name}</h4>
        <p>{props.jobTitle}</p>
      </div>
    </div>
  );
};

export default Testimonials;
