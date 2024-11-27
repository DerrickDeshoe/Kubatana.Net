import React from "react";
import FeatureCard from "../Components/FeatureCard";
import Education from "../../public/Images/Education.svg";
import PureWater from "../../public/Images/PureWater.svg";
import HealthyLife from "../../public/Images/HealthyLife.svg";

const page = () => {
  return (
    <div>
      {/* Phone Landing */}
      <div className="lg:hidden flex bg-phoneCauses bg-no-repeat bg-cover bg-center w-[100%] h-[100vh]">
        <div className="absolute top-0 w-full h-[100vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>
      {/* Laptop Landing */}
      <div className="hidden lg:flex bg-background1234 bg-no-repeat bg-cover bg-center w-[100%] h-[60vh]">
        <div className="absolute top-0 w-full h-[60vh] bg-overlay bg-opacity-75 flex justify-between items-center px-10"></div>
      </div>


      {/* Features Section */}
      <div className="lg:px-5 xl:px-10 w-[100%]">
        <div className="bg-light p-5 lg:py-10 flex flex-col space-y-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <p className="bg-lightOrange text-orange rounded-lg px-2 text-xs lg:text-sm font-bold">
              Feature Causes
            </p>
            <h2 className="font-bold text-2xl lg:text-3xl lg:w-[40%]">
              Every Child Deserves The Opportunity To Learn
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <FeatureCard
              name="Education"
              title="Education For African Children"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
              image={Education}
            />
            <FeatureCard
              name="Pure Water"
              title="Ensure Pure Drinking Water"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
              image={PureWater}
            />
            <FeatureCard
              name="Healthy Life"
              title="Ensure Medical Treatment"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
              image={HealthyLife}
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default page;

