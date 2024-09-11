import WebsiteServices from "@/app/utils/Reuseable/WebsiteServices";
import React from "react";
import { FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaCarAlt } from "react-icons/fa";

const HotelAmenities = () => {
  return (
    <div className="mx-8 2xl:mx-0 xl:mx-0 flex flex-col space-x-0 space-y-3 2xl:flex-row xl:flex-row items-center justify-center 2xl:space-x-12 2xl:space-y-0 xl:space-x-12 xl:space-y-0">
      <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start space-y-2">
        <WebsiteServices color="bg-orange-300">
          <FaHotel className="w-10 h-10 " />
        </WebsiteServices>
        <h1 className="text-xl font-bold">Hotel Booking</h1>
        <span>
          A pleasure exertion if believed provided to. All led out world this
          music while asked.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start space-y-2">
        <WebsiteServices color="bg-green-300">
          <MdFlightTakeoff className="w-10 h-10 " />
        </WebsiteServices>
        <h1 className="text-xl font-bold">Flight Booking</h1>
        <span className="text-center 2xl:text-start xl:text-start">
          Warrant private blushes removed an in equally totally Objection do Mr
          prevailed.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start space-y-2">
        <WebsiteServices color="bg-purple-300">
          <BiWorld className="w-10 h-10 " />
        </WebsiteServices>
        <h1 className="text-xl font-bold">Tour Booking</h1>
        <span className="text-center 2xl:text-start xl:text-start">
          Dashwood does provide stronger is. But discretion frequently sir she
          instruments.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start space-y-2">
        <WebsiteServices color="bg-lime-300">
          <FaCarAlt className="w-10 h-10 " />
        </WebsiteServices>
        <h1 className="text-xl font-bold">Cab Booking</h1>
        <span className="text-center 2xl:text-start xl:text-start">
          Imprudence attachment him his for sympathize. Large above be to means.
        </span>
      </div>
    </div>
  );
};

export default HotelAmenities;
