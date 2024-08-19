import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Support = () => {
  return (
    <div className="flex 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:space-x-44 2xl:space-y-0 xl:flex-row xl:items-center xl:justify-center xl:space-x-40 xl:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-24 lg:space-y-0 md:flex-col md:items-center md:justify-center md:space-x-0 md:space-y-20 ls:flex-col ls:items-center ls:justify-center ls:space-x-0 ls:space-y-20 ms:flex-col ms:items-center ms:justify-center ms:space-x-0 ms:space-y-20 xs:flex-col xs:items-center xs:justify-center xs:space-x-0 xs:space-y-5">
      <div className="w-80 2xl:w-96 xl:w-96 lg:w-96 md:w-96 h-60 bg-gray-300 p-10 shadow-lg rounded-xl">
        <div className="flex flex-row items-start justify-start space-x-5">
          <FaHandHoldingHeart size={100} />
          <div className="flex flex-col items-start justify-start space-y-5">
            <span className="text-2xl font-bold">24x7 Help</span>
            <span className="text-lg text-wrap w-48 text-gray-600">
              If we fall short of your expectation in any way, let us know
            </span>
          </div>
        </div>
      </div>
      <div className="w-80 2xl:w-96 xl:w-96 lg:w-96 md:w-96 h-60 bg-gray-300 p-10 shadow-lg rounded-xl">
        <div className="flex flex-row items-start justify-start space-x-5">
          <FaHandHoldingDollar size={100} />
          <div className="flex flex-col items-start justify-start space-y-5">
            <span className="text-2xl font-bold">Payment Trust</span>
            <span className="text-lg text-wrap w-48 text-gray-600">
              All refunds come with no questions asked guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
