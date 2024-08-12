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
const BestHolidaysStart = () => {
  return (
    <div className="relative z-10 grid grid-cols-5 grid-flow-row gap-4">
      <div className="col-span-2">
        <Image
          src={holiday}
          alt="holiday"
          className="w-[35rem] h-[40rem] rounded-3xl shadow-2xl"
        />
        <div className="absolute z-20 bottom-10 left-8 ">
          <div className="relative bg-gray-800 h-36 w-[26rem] rounded-2xl shadow-xl px-10 py-5">
            <div className="grid grid-cols-2 gap-x-52">
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
        <div className="absolute z-20 bottom-36 left-4 ">
          <Image src={like} alt="like" className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};

export default BestHolidaysStart;
