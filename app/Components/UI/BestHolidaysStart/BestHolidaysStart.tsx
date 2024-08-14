"use client";
import React from "react";
import Image from "next/image";
import holiday from "@/assets/article/holiday.jpg";
import { AvatarGroup, Avatar } from "@mui/material";
import a1 from "@/assets/avatar/a1.jpg";
import a2 from "@/assets/avatar/a2.jpg";
import a3 from "@/assets/avatar/a3.jpg";
import a4 from "@/assets/avatar/a4.jpg";
import like from "@/assets/article/like.svg";
import { IoStar } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { FaClock } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { IoMdFlash } from "react-icons/io";
import ServicesHoliday from "@/app/utils/Reuseable/ServicesHoliday";
const BestHolidaysStart = () => {
  return (
    <div className="relative z-10 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-rows-2 ls:grid-rows-2 ms:grid-rows-2 grid-flow-row gap-4 md:gap-y-16 ls:gap-y-10 ms:gap-y-8 gap-y-0 2xl:h-[45rem] xl:h-[45rem] lg:h-[45rem] md:h-[80rem] ls:h-[75rem] ms:h-[100rem] xs:h-[100rem]">
      {/* Image */}
      <div className="relative  2xl:col-span-2 xl:col-span-2 lg:col-span-2 col-row-1">
        <Image
          src={holiday}
          alt="holiday"
          className="2xl:w-[35rem] xl:w-[35rem] lg:w-[35rem] md:w-full ls:w-full h-[40rem] rounded-3xl shadow-2xl"
        />
        <div className="absolute z-20 2xl:bottom-10 2xl:left-8 xl:bottom-10 xl:left-8 lg:bottom-10 lg:left-8 md:top-[25rem] md:left-16 ls:top-[28rem] ls:left-7 ms:top-[26rem] ms:left-3 xs:top-[26rem] xs:left-0 ">
          <div className="relative bg-gray-800 2xl:h-36 2xl:w-[26rem] xl:h-36 xl:w-[26rem] lg:h-36 lg:w-[26rem] md:h-36 md:w-[26rem] ls:h-30 ls:w-80 ms:h-30 ms:w-[20rem] xs:w-[18.88rem] rounded-2xl shadow-xl px-10 py-5">
            <div className="grid grid-cols-2 2xl:gap-x-52 xl:gap-x-52 lg:gap-x-52 md:gap-x-52 ls:gap-x-44 ms:gap-x-44 xs:gap-x-44">
              <div className="cols-span-1 flex flex-col items-start justify-start space-y-4">
                <h1 className="text-xl text-white font-medium tracking-wide antialiased">
                  Client
                </h1>
                <AvatarGroup
                  renderSurplus={(surplus) => (
                    <span>+{surplus.toString()[0]}k</span>
                  )}
                  total={1000}>
                  <Avatar alt="Remy Sharp" src={a1.src} />
                  <Avatar alt="Travis Howard" src={a2.src} />
                  <Avatar alt="Agnes Walker" src={a3.src} />
                  <Avatar alt="Trevor Henderson" src={a4.src} />
                </AvatarGroup>
              </div>
              <div className="cols-span-1 flex flex-col items-start justify-start space-y-4">
                <span className="text-xl text-white font-medium tracking-wide antialiased">
                  Rating
                </span>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <span className="text-xl text-white font-medium tracking-wide antialiased">
                    4.5
                  </span>
                  <div>
                    <IoStar className="text-yellow-400 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-20 2xl:bottom-36 2xl:left-4 xl:bottom-36 xl:left-4 lg:bottom-36 lg:left-4 md:top-96 md:left-10 ls:top-[26rem] ls:left-4 ms:top-96 ms:left-0 xs:top-96 xs:-left-1 ">
          <Image src={like} alt="like" className="w-16 h-16" />
        </div>
      </div>

      {/* Content */}
      <div className="2xl:col-span-2 xl:col-span-2 lg:col-span-2 col-row-1">
        <div className="flex flex-col items-start justify-start space-y-20 md:space-y-8 ls:space-y-7 ms:space-y-5 xs:space-y-5">
          <span className="text-5xl font-semibold tracking-tight antialiased">
            The Best Holidays Start Here!
          </span>
          <span className="text-lg font-light tracking-tight antialiased text-gray-300 text-wrap">
            Book your hotel with us and don't forget to grab an awesome hotel
            deal to save massive on your stay.
          </span>
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row ls:flex-row ms:flex-col xs:flex-col items-start justify-start 2xl:space-x-6 2xl:space-y-0 xl:space-x-6 xl:space-y-0 lg:space-x-6 lg:space-y-0 md:space-x-6 md:space-y-0 ls:space-x-6 ls:space-y-0 space-x-0 ms:space-y-2 xs:space-y-4 ">
            <div className="flex flex-col items-start justify-start space-y-4">
              <ServicesHoliday
                icon={<ImSpoonKnife className="text-green-600 w-4 h-4" />}
                colorRoundedFull="bg-green-400"
                content="Quality Food"
                title="Quality Food"
                description="Departure defective arranging rapturous did. Conduct denied adding worthy little."
              />
              <ServicesHoliday
                icon={<SiAdguard className="text-orange-600 w-4 h-4" />}
                colorRoundedFull="bg-orange-400"
                content="Quick Services"
                title="Quick Services"
                description="Arranging rapturous did believe him all had supported."
              />
            </div>
            <div className="flex flex-col items-start justify-start space-y-4">
              <ServicesHoliday
                icon={<FaClock className="text-red-600 w-4 h-4" />}
                colorRoundedFull="bg-red-400"
                content="Quick Services"
                title="Quick Services"
                description="Supposing so be resolving breakfast am or perfectly."
              />
              <ServicesHoliday
                icon={<IoMdFlash className="text-teal-600 w-4 h-4" />}
                colorRoundedFull="bg-teal-400"
                content="24 Hours Alert"
                title="24 Hours Alert"
                description="Rapturous did believe him all had supported."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestHolidaysStart;
