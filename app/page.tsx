"use client";

import { useState } from "react"; // Import useState for managing state
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../public/Images/RightArrow.svg";
import RightArrow2 from "../public/Images/RightArrow2.svg";
import Crew from "../public/Images/Rectangle 6.svg";
import Make from "../public/Images/MakeChange.svg";
import FeatureCard from "./Components/FeatureCard";
import Education from "../public/Images/Education.svg";
import PureWater from "../public/Images/PureWater.svg";
import HealthyLife from "../public/Images/HealthyLife.svg";
import WhatWeDo from "./Components/WhatWeDo";
import WWD1 from "../public/Images/WWD1.svg";
import WWD2 from "../public/Images/WWD2.svg";
import WWD3 from "../public/Images/WWD3.svg";
import Testimonials from "./Components/Testimonials";
import Arthur from "../public/Images/Arthur.svg";
import LeftHomeArrow from "../public/Images/LeftHomeButton.svg";
import RightHomeArrow from "../public/Images/RightHomeButton.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const settings = {
//   arrows:false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 768, // For tablets and phones
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,

//       },
//     },
//     {
//       breakpoint: 480, // For phones
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,

//       },
//     },
//   ],
// };

// // Import the background images
// import LaptopBackground1 from "../public/Images/HomeBack.svg";
// import LaptopBackground2 from "../public/Images/HomeBack5.svg";
// import LaptopBackground3 from "../public/Images/HomeBackground2.svg";
// import LaptopBackground4 from "../public/Images/Haiti.svg";

// import MobileBackground2 from "../public/Images/PhoneLanding.svg";
// import MobileBackground1 from "../public/Images/PhoneBack2.svg";
// import MobileBackground4 from "../public/Images/PhoneBackkk.svg";
// import MobileBackground3 from "../public/Images/PhoneBack3.svg";

// const Home = () => {
//   // Arrays to hold the imported background images for laptop and mobile
//   const laptopBackgrounds = [
//     LaptopBackground1,
//     LaptopBackground2,
//     LaptopBackground3,
//     LaptopBackground4,
//   ];
//   const mobileBackgrounds = [
//     MobileBackground1,
//     MobileBackground3,
//     MobileBackground2,
//     MobileBackground4,
//   ];

//   // State to keep track of the current index of backgrounds
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to change background based on direction
//   const changeBgImage = (direction) => {
//     if (direction === "left") {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? laptopBackgrounds.length - 1 : prevIndex - 1
//       );
//     } else if (direction === "right") {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === laptopBackgrounds.length - 1 ? 0 : prevIndex + 1
//       );
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Desktop Version */}
//       <div
//         className="hidden lg:flex bg-no-repeat bg-cover h-[100vh] w-[100%]"
//         style={{
//           backgroundImage: `url(${laptopBackgrounds[currentIndex].src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10">
//           <div className="flex space-x-[80%] justify-center pt-10">
//             <Image
//               src={LeftHomeArrow}
//               alt="left arrow"
//               className="w-[60%]"
//               onClick={() => changeBgImage("left")}
//             />
//           </div>
//           <div className="flex flex-col items-center justify-end space-y-6 text-white text-center lg:h-[50vh] w-[100%]">
//             <h1 className="font-semibold text-5xl w-[70%]">
//               Let's change the world with humanity
//             </h1>
//             <p className="w-[50%] text-gray">
//               Empowering each other to lead with compassion, embrace diversity
//               and uplift every voice.
//             </p>
//             <Link
//               href="#"
//               className="flex space-x-2 justify-center bg-orange rounded-sm py-2 w-[15%] lg:w-[12%] "
//             >
//               <button className="font-semibold text-xs lg:text-sm text-white">
//                 Learn More
//               </button>
//               <Image
//                 src={RightArrow}
//                 alt="right arrow"
//                 className="lg:w-[15%]"
//               />
//             </Link>
//           </div>
//           <div className="flex space-x-[80%] justify-center pt-10">
//             <Image
//               src={RightHomeArrow}
//               alt="right arrow"
//               className="w-[60%]"
//               onClick={() => changeBgImage("right")}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Version */}
//       <div
//         className="lg:hidden bg-no-repeat bg-cover h-[100vh] w-[100%]"
//         style={{
//           backgroundImage: `url(${mobileBackgrounds[currentIndex].src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute top-0 w-[100%] h-[100vh] bg-overlay bg-opacity-80 flex flex-col justify-center items-center">
//           <div className="flex flex-col items-center justify-end space-y-5 text-white text-center lg:h-[50vh]">
//             <h1 className="font-semibold text-2xl w-[70%]">
//               Let's change the world with humanity
//             </h1>
//             <p className="w-[80%] text-gray">
//               Empowering each other to lead with compassion, embrace diversity
//               and uplift every voice.
//             </p>
//             <Link
//               href="#"
//               className="flex space-x-2 justify-center bg-orange rounded-sm py-2 w-[30%] "
//             >
//               <button className="font-semibold text-xs text-white">
//                 Learn More
//               </button>
//               <Image src={RightArrow} alt="right arrow" className="w-[15%]" />
//             </Link>
//           </div>
//           <div className="flex space-x-[80%] justify-center pt-10">
//             <Image
//               src={LeftHomeArrow}
//               alt="left arrow"
//               className="w-[20%]"
//               onClick={() => changeBgImage("left")}
//             />
//             <Image
//               src={RightHomeArrow}
//               alt="right arrow"
//               className="w-[20%]"
//               onClick={() => changeBgImage("right")}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-wrap-reverse p-7 gap-5 lg:p-5 xl:p-10 lg:mt-20 lg:justify-between xl:space-x-5 w-[100%]">
//         <div className="lg:w-[48%] relative flex items-end mt-8 lg:mt-0">
//           <Image
//             src={Crew}
//             alt="image"
//             className=" w-[85%] lg:w-[90%] xl:w-[80%]"
//           />
//           <Image
//             src={Make}
//             alt="image"
//             className="absolute w-[33%] top-[-30px] right-[-5px] lg:top-[-30px] lg:right-[-20px] xl:top-[-55px] xl:right-10 lg:w-[38%] xl:w-[30%]"
//           />
//         </div>
//         <div className="flex flex-col space-y-5 lg:w-[48%] relative justify-between mt-10 lg:mt-0">
//           <button className="bg-lightOrange w-[25%] lg:w-[16%] rounded-xl text-orange font-bold py-1 absolute top-[-30px] lg:left-0 lg:top-[-30px] xl:top-[-55px] text-xs">
//             About Us
//           </button>
//           <h3 className="font-bold text-[20px] lg:text-2xl xl:text-4xl">
//             We Help People In Need Around The World
//           </h3>
//           <div className="flex flex-col bg-light border-b-4 border-orange p-3 rounded-lg space-y-2 lg:w-[90%]">
//             <p className="lg:w-[85%] text-xs lg:text-sm leading-relaxed tracking-wide">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               minim veniam, quis nostrud Lorem ipsum dolor sit amet
//             </p>
//             <div className="flex space-x-3">
//               <p className="font-bold text-xs lg:text-sm">Arthur T Kunaka</p>
//               <p className="text-xs lg:text-sm">CEO/Founder</p>
//             </div>
//           </div>
//           <p className="text-xs lg:text-sm lg:w-[78%] leading-relaxed tracking-wide">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
//             adipiscing elit, sed do minim veniam, quis nostrud
//           </p>
//           <div className="flex space-x-3 py-3">
//             <Link
//               href="#"
//               className="flex space-x-2 justify-center bg-orange rounded-sm py-1"
//             >
//               <button className=" font-semibold text-xs text-white ">
//                 Learn More
//               </button>
//               <Image
//                 src={RightArrow}
//                 alt="image"
//                 className=" w-[20%] lg:w-[18%]"
//               />
//             </Link>
//             <Link
//               href="/Contact"
//               className="flex space-x-2 justify-center border border-orange rounded-sm py-1 "
//             >
//               <button className=" font-semibold text-xs text-orange ">
//                 Donate Now
//               </button>
//               <Image
//                 src={RightArrow2}
//                 alt="image"
//                 className="w-[20%] lg:w-[18%]"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="lg:px-5 xl:px-10 w-[100%]">
//         <div className="bg-light p-5 lg:py-10 flex flex-col space-y-10">
//           <div className="flex flex-col items-center text-center space-y-3">
//             <p className="bg-lightOrange text-orange rounded-lg px-2 text-xs lg:text-sm font-bold">
//               Feature Causes
//             </p>
//             <h2 className="font-bold text-2xl lg:text-3xl lg:w-[40%]">
//               Every Child Deserves The Opportunity To Learn
//             </h2>
//           </div>
//           <div className="flex flex-wrap justify-center gap-5">
//             <FeatureCard
//               name="Education"
//               title="Education For African Children"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                         minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
//               image={Education}
//             />
//             <FeatureCard
//               name="Pure Water"
//               title="Ensure Pure Drinking Water"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                         minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
//               image={PureWater}
//             />
//             <FeatureCard
//               name="Healthy Life"
//               title="Ensure Medical Treatment"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                         minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
//               image={HealthyLife}
//             />
//           </div>
//         </div>
//       </div>

//       {/* WHat We Do Section */}
//       <div className="px-5 py-8 flex flex-col space-y-8">
//         <div className="flex flex-col items-center text-center space-y-3">
//           <p className="bg-lightOrange text-orange rounded-lg px-2 text-xs lg:text-sm font-bold">
//             What We Do
//           </p>
//           <h2 className="font-bold text-2xl lg:text-3xl lg:w-[40%]">
//             Learn More About What We Do And Get Involved
//           </h2>
//         </div>
//         <div className="flex flex-wrap justify-center gap-5">
//           <WhatWeDo
//             image={WWD1}
//             heading="Child Education"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
//             link="#"
//           />
//           <WhatWeDo
//             image={WWD2}
//             heading="Pure Drinking Water"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
//             link="#"
//           />
//           <WhatWeDo
//             image={WWD3}
//             heading="Medical Treatment"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
//             link="#"
//           />
//         </div>
//       </div>

//       {/* Donate Section */}
//       <div className="hidden lg:bg-home bg-no-repeat bg-cover h-[100vh] lg:h-[60vh] w-[100%] lg:flex flex-wrap px-2 py-10 lg:px-10 justify-center gap-5">
//         <div className="w-[90%] lg:w-[48%] flex flex-col text-white lg:justify-between lg:h-[44vh] xl:h-[38vh] space-y-4">
//           <div className="flex flex-col space-y-5">
//             <p className="bg-lightOrange text-orange rounded-lg py-1 px-2 text-xs lg:text-sm font-bold w-[28%] lg:w-[25%] xl:w-[18%] space-y-3">
//               Donate Now
//             </p>
//             <h2 className="font-bold text-2xl lg:text-3xl lg:w-[80%]">
//               Thanks For The Results Achieved With You
//             </h2>
//           </div>
//           <p className="lg:w-[80%]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
//             adipis elit, sed do minim
//           </p>
//         </div>
//         <div className="w-[90%] lg:w-[48%] bg-white p-5 flex flex-col justify-between space-y-4">
//           {/* Name Input */}
//           <label className="flex flex-col">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
//               required
//               onInvalid={(e) =>
//                 e.currentTarget.setCustomValidity("Name is required")
//               }
//               onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
//             />
//             <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
//               Please enter your name.
//             </span>
//           </label>

//           {/* Email Input */}
//           <label className="flex flex-col">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
//               required
//               onInvalid={(e) =>
//                 e.currentTarget.setCustomValidity("Please enter a valid email")
//               }
//               onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
//             />
//             <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
//               Please enter a valid email.
//             </span>
//           </label>

//           {/* Donation Amounts */}
//           <div className="flex flex-wrap items-center justify-between space-y-4 lg:space-y-0">
//             {/* Fixed Amounts */}
//             <div className="flex justify-between space-x-4 w-[100%] lg:w-[65%]">
//               {/* Option 1: $10 */}
//               <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light  hover:bg-orange hover:text-white">
//                 <input
//                   type="radio"
//                   name="donation"
//                   value="10"
//                   className="hidden peer"
//                   required
//                 />
//                 $10
//               </label>

//               {/* Option 2: $20 */}
//               <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
//                 <input
//                   type="radio"
//                   name="donation"
//                   value="20"
//                   className="hidden peer"
//                 />
//                 $20
//               </label>

//               {/* Option 3: $30 */}
//               <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
//                 <input
//                   type="radio"
//                   name="donation"
//                   value="30"
//                   className="hidden peer"
//                 />
//                 $30
//               </label>
//             </div>

//             {/* Dropdown for Custom Amounts */}
//             <div className="w-full lg:w-[30%]">
//               <select
//                 name="customDonation"
//                 className="w-full p-2 text-xs font-semibold text-gray-600 rounded-lg bg-light hover:border-orange"
//               >
//                 <option value="" disabled selected>
//                   Select Amount
//                 </option>
//                 <option value="40">$40</option>
//                 <option value="50">$50</option>
//                 <option value="60">$60</option>
//                 <option value="70">$70</option>
//                 <option value="80">$80</option>
//                 <option value="90">$90</option>
//                 <option value="100">$100</option>
//               </select>
//             </div>
//           </div>

//           {/* Donate Button */}
//           <Link
//             href="#"
//             className="flex space-x-2 justify-center bg-orange rounded-sm  py-2 w-[37%] lg:w-[20%]"
//           >
//             <button className="font-semibold text-xs text-white" type="submit">
//               Donate Now
//             </button>
//             <Image
//               src={RightArrow}
//               alt="image"
//               className="w-[20%] lg:w-[15%]"
//             />
//           </Link>
//         </div>
//       </div>

//       {/* Donate Phone */}

//       <div className="lg:hidden bg-phoneDonate bg-no-repeat bg-cover h-[100vh] lg:h-[60vh] w-[100%] flex flex-wrap px-2 py-10 lg:px-10 justify-center relative">
//         <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-60 flex flex-col justify-center items-center gap-5 ">
//           <div className="w-[90%] lg:w-[48%] flex flex-col text-white lg:justify-between lg:h-[44vh] xl:h-[38vh] space-y-4">
//             <div className="flex flex-col space-y-5">
//               <p className="bg-lightOrange text-orange rounded-lg py-1 px-2 text-xs lg:text-sm font-bold w-[28%] lg:w-[25%] xl:w-[18%] space-y-3">
//                 Donate Now
//               </p>
//               <h2 className="font-bold text-2xl lg:text-3xl lg:w-[80%]">
//                 Thanks For The Results Achieved With You
//               </h2>
//             </div>
//             <p className="lg:w-[80%]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
//               adipis elit, sed do minim
//             </p>
//           </div>
//           <div className="w-[90%] lg:w-[48%] bg-white p-5 flex flex-col justify-between space-y-4">
//             {/* Name Input */}
//             <label className="flex flex-col">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
//                 required
//                 onInvalid={(e) =>
//                   e.currentTarget.setCustomValidity("Name is required")
//                 }
//                 onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
//               />
//               <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
//                 Please enter your name.
//               </span>
//             </label>

//             {/* Email Input */}
//             <label className="flex flex-col">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="p-3 text-xs rounded-lg bg-light peer hover:border-orange focus:ring-0 outline-none"
//                 required
//                 onInvalid={(e) =>
//                   e.currentTarget.setCustomValidity(
//                     "Please enter a valid email"
//                   )
//                 }
//                 onInput={(e) => e.currentTarget.setCustomValidity("")} // Clear error on typing
//               />
//               <span className="hidden peer-invalid:block text-red-500 text-xs mt-1">
//                 Please enter a valid email.
//               </span>
//             </label>

//             {/* Donation Amounts */}
//             <div className="flex flex-wrap items-center justify-between space-y-4 lg:space-y-0 ">
//               {/* Fixed Amounts */}
//               <div className="flex justify-between space-x-4 w-full lg:w-[65%]">
//                 {/* Option 1: $10 */}
//                 <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light  hover:bg-orange hover:text-white">
//                   <input
//                     type="radio"
//                     name="donation"
//                     value="10"
//                     className="hidden peer"
//                     required
//                   />
//                   $10
//                 </label>

//                 {/* Option 2: $20 */}
//                 <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
//                   <input
//                     type="radio"
//                     name="donation"
//                     value="20"
//                     className="hidden peer"
//                   />
//                   $20
//                 </label>

//                 {/* Option 3: $30 */}
//                 <label className="flex items-center justify-center w-1/3 py-2 text-xs font-semibold text-center rounded-lg cursor-pointer bg-light hover:bg-orange hover:text-white">
//                   <input
//                     type="radio"
//                     name="donation"
//                     value="30"
//                     className="hidden peer"
//                   />
//                   $30
//                 </label>
//               </div>

//               {/* Dropdown for Custom Amounts */}
//               <div className="w-full lg:w-[30%]">
//                 <select
//                   name="customDonation"
//                   className="w-full p-2 text-xs font-semibold text-gray-600 rounded-lg bg-light hover:border-orange"
//                 >
//                   <option value="" disabled selected>
//                     Select Amount
//                   </option>
//                   <option value="40">$40</option>
//                   <option value="50">$50</option>
//                   <option value="60">$60</option>
//                   <option value="70">$70</option>
//                   <option value="80">$80</option>
//                   <option value="90">$90</option>
//                   <option value="100">$100</option>
//                 </select>
//               </div>
//             </div>

//             {/* Donate Button */}
//             <Link
//               href="#"
//               className="flex space-x-2 justify-center bg-orange rounded-sm py-2 w-[37%] lg:w-[30%]"
//             >
//               <button
//                 className="font-semibold text-xs text-white"
//                 type="submit"
//               >
//                 Donate Now
//               </button>
//               <Image
//                 src={RightArrow}
//                 alt="image"
//                 className="w-[20%] lg:w-[15%]"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}

//       <div className="py-8 flex flex-col space-y-8 w-[100%]">
//         <div className="flex flex-col items-center text-center space-y-3 px-5 ">
//           <p className="bg-lightOrange text-orange rounded-lg px-2 py-1 text-xs lg:text-sm font-bold">
//             Testimonials
//           </p>
//           <h2 className="font-bold text-2xl lg:text-3xl lg:w-[45%] xl:w-[30%]">
//             Trusted By Thousands Of People And Non-profits
//           </h2>
//         </div>

//         <Slider
//           {...settings}
//           className="w-[100%]"
//         >
//           <Testimonials
//             image={Arthur}
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipis elit, sed do minim"
//             name="Arthur T Kunaka"
//             jobTitle="UI/UX Designer"
//           />

//           <Testimonials
//             image={Arthur}
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipis elit, sed do minim"
//             name="Arthur T Kunaka"
//             jobTitle="UI/UX Designer"
//           />

//           <Testimonials
//             image={Arthur}
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipis elit, sed do minim"
//             name="Arthur T Kunaka"
//             jobTitle="UI/UX Designer"
//           />
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Home;

// Import the background images
import LaptopBackground1 from "../public/Images/HomeBack.svg";
import LaptopBackground2 from "../public/Images/HomeBack5.svg";
import LaptopBackground3 from "../public/Images/HomeBackground2.svg";
import LaptopBackground4 from "../public/Images/Haiti.svg";

import MobileBackground2 from "../public/Images/PhoneLanding.svg";
import MobileBackground1 from "../public/Images/PhoneBack2.svg";
import MobileBackground4 from "../public/Images/PhoneBackkk.svg";
import MobileBackground3 from "../public/Images/PhoneBack3.svg";

const Home = () => {
  // Arrays to hold the imported background images for laptop and mobile
  const laptopBackgrounds = [
    LaptopBackground1,
    LaptopBackground2,
    LaptopBackground3,
    LaptopBackground4,
  ];
  const mobileBackgrounds = [
    MobileBackground1,
    MobileBackground3,
    MobileBackground2,
    MobileBackground4,
  ];

  // State to keep track of the current index of backgrounds
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change background based on direction
  const changeBgImage = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? laptopBackgrounds.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === laptopBackgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div
        className="hidden lg:flex bg-no-repeat bg-cover h-[100vh] w-[100%]"
        style={{
          backgroundImage: `url(${laptopBackgrounds[currentIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10">
          <div className="flex space-x-[80%] justify-center pt-10">
            <Image
              src={LeftHomeArrow}
              alt="left arrow"
              className="w-[60%]"
              onClick={() => changeBgImage("left")}
            />
          </div>
          <div className="flex flex-col items-center justify-end space-y-6 text-white text-center lg:h-[50vh] w-[100%]">
            <h1 className="font-semibold text-5xl w-[70%]">
              Let&#39;s change the world with humanity
            </h1>
            <p className="w-[50%] text-gray">
              Empowering each other to lead with compassion, embrace diversity
              and uplift every voice.
            </p>
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm py-2 w-[15%] lg:w-[12%]"
            >
              <button className="font-semibold text-xs lg:text-sm text-white">
                Learn More
              </button>
              <Image
                src={RightArrow}
                alt="right arrow"
                className="lg:w-[15%]"
              />
            </Link>
          </div>
          <div className="flex space-x-[80%] justify-center pt-10">
            <Image
              src={RightHomeArrow}
              alt="right arrow"
              className="w-[60%]"
              onClick={() => changeBgImage("right")}
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="lg:hidden bg-no-repeat bg-cover h-[100vh] w-[100%]"
        style={{
          backgroundImage: `url(${mobileBackgrounds[currentIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 w-[100%] h-[100vh] bg-overlay bg-opacity-80 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-end space-y-5 text-white text-center lg:h-[50vh]">
            <h1 className="font-semibold text-2xl w-[70%]">
              Let&#39;s change the world with humanity
            </h1>
            <p className="w-[80%] text-gray">
              Empowering each other to lead with compassion, embrace diversity
              and uplift every voice.
            </p>
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm py-2 w-[30%]"
            >
              <button className="font-semibold text-xs text-white">
                Learn More
              </button>
              <Image src={RightArrow} alt="right arrow" className="w-[15%]" />
            </Link>
          </div>
          <div className="flex space-x-[80%] justify-center pt-10">
            <Image
              src={LeftHomeArrow}
              alt="left arrow"
              className="w-[20%]"
              onClick={() => changeBgImage("left")}
            />
            <Image
              src={RightHomeArrow}
              alt="right arrow"
              className="w-[20%]"
              onClick={() => changeBgImage("right")}
            />
          </div>
        </div>
      </div>

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

      {/* Donate Section */}
      <div className="hidden lg:bg-home bg-no-repeat bg-cover h-[100vh] lg:h-[60vh] w-[100%] lg:flex flex-wrap px-2 py-10 lg:px-10 justify-center gap-5">
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
    </div>
  );
};

export default Home;
