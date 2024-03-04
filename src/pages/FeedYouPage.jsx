import React from "react";
import YouIcon from "../assets/YouIcon";

const FeedYouPage = () => {
  return (
    <div className="flex flex-col gap-6 md:my-[3.81rem] lg:w-[90.40vw] md:w-[84.2vw] max-sm:w-[100vw] max-sm:my-[4.6rem] max-sm:mx-auto md:mx-24">
      <div className="md:flex md:flex-wrap max-sm:flex max-sm:flex-col lg:gap-x-5 md:gap-x-6 md:gap-y-10 max-sm:gap-y-10 md:mt-20 max-sm:mt-16">
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <div className="h-32 w-32">
            <YouIcon />
          </div>
          <h1 className="font-normal text-2xl sm:text-lg">
            Enjoy your favourite videos by offically singin on youtube
          </h1>
            <a
              className="text-blue-600 "
              target="_blank"
              href="https://www.youtube.com"
            >
              click here
            </a>
        </div>
      </div>
    </div>
  );
};

export default FeedYouPage;
