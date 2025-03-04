import React from "react";
import BlueArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import TrustPilot from "../../public/assets/Trustpilot.svg";
import CNN from "../../public/assets/CNN.svg";
import Clutch from "../../public/assets/Clutch.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36486c] lg:text-[18px] lg:leading-7">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 py-4 px-8 text-[#4328EB] rounded-[4px] flex item-center justify-center gap-x-2 lg:w-fit">
            View pricing
            <span>
              <Image src={BlueArrow} alt={"learn more"} />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt={"background"}
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt={"heroImage"}
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20 ">
            <p className="text-white text-center lg:text-[18px]">Trusted by these companies</p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center p-[20px] align-middle lg:grid-cols-5">
              <Image src={Google} alt={""} />
              <Image src={Slack} alt={""} />
              <Image src={TrustPilot} alt={""} />
              <Image src={CNN} alt={""} />
              <Image src={Clutch} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
