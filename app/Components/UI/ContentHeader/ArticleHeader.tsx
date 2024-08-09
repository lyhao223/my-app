import Link from "next/link";
import React from "react";
import Image from "next/image";
//image
import imageArticle from "@/assets/article/imageArticle.jpg";
import xsimage from "@/assets/article/xsimage.jpg";
import lgimage from "@/assets/article/lgimage.jpg";
//icons
import { MdHeadsetMic } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TextField } from "@mui/material";
import { CiCalendar } from "react-icons/ci";
const ArticleHeader = () => {
  return (
    <article className="relative flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col ls:flex-col ms:flex-col xs:flex-col flex-col items-start justify-between 2xl:space-x-36 xl:space-x-36 lg:space-x-5 md:space-y-2 md:space-x-0 ls:space-y-3 ls:space-x-0 ms:space-y-2 ms:space-x-0">
      <div className="flex flex-col items-start justify-center space-y-6 2xl:py-20 xl:py-20 lg:py-20 md:py-20 ls:py-10 ms:py-10 xs:py-6">
        <div className="2xl:w-96 xl:w-96 lg:w-96 w-full text-wrap">
          <h1 className="2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-xl font-extrabold antialiased ">
            Find the top Hotels nearby.
          </h1>
        </div>
        <div className="2xl:w-96 xl:w-96 lg:w-96 w-full text-wrap">
          <span className="text-gray-600 antialiased tracking-wide">
            We bring you not only a stay option, but an experience in your
            budget to enjoy the luxury.
          </span>
        </div>
        <Link
          href={"/"}
          className="rounded-lg p-3 bg-purple-400 group hover:bg-purple-700 hover:duration-200 hover:transition-all hover:ease-out">
          <span className="text-purple-700 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-out">
            Discover Now
          </span>
        </Link>
      </div>
      <Image
        src={imageArticle}
        alt="article header"
        className="relative z-10 2xl:w-[47rem] 2xl:h-[43rem] xl:w-[47rem] xl:h-[43rem] lg:w-[33rem] lg:h-[35rem] w-auto h-auto rounded-lg"
      />
      <Image
        src={xsimage}
        alt="article header"
        className="absolute z-10 2xl:left-80 2xl:top-10 xl:left-80 xl:top-10 lg:left-80 lg:top-10 md:top-[30rem] md:-left-10 2xl:w-32 2xl:h-32 xl:w-32 xl:h-32 lg:w-32 lg:h-32 md:w-32 md:h-32 ls:hidden ms:hidden xs:hidden 2xl:inline-block xl:inline-block lg:inline-block md:inline-block rounded-full border-2 border-white"
      />
      <Image
        src={lgimage}
        alt="article header"
        className="absolute z-10 2xl:left-80 2xl:top-72 xl:left-80 xl:top-72 lg:left-80 lg:top-72 md:top-[43rem] md:-left-10 2xl:w-48 2xl:h-48 xl:w-48 xl:h-48 lg:w-48 lg:h-48 md:w-48 md:h-48 ls:hidden ms:hidden xs:hidden 2xl:inline-block xl:inline-block lg:inline-block md:inline-block rounded-full border-2 border-white"
      />
      <div className="absolute z-20 2xl:w-48 2xl:h-48 2xl:-right-20 2xl:-top-7 xl:w-48 xl:h-48 xl:-right-20 xl:-top-7 lg:w-32 lg:h-32 lg:-right-5 lg:-top-7 md:w-28 md:h-28 md:-right-4 md:top-[22.5rem] 2xl:flex xl:flex lg:flex md:flex hidden flex-col items-center justify-center border-2 border-black rounded-lg">
        <div className="inset-0 absolute bg-slate-200 bg-opacity-75 blur-sm"></div>
        <div className="relative font-extrabold text-red-700">
          <MdHeadsetMic className="2xl:w-14 2xl:h-14 xl:w-14 xl:h-14 lg:w-8 lg:h-8 h-5 w-5" />
        </div>
        <span className="relative 2xl:text-2xl xl:text-2xl lg:text-sm text-xs font-extrabold tracking-widest">
          24 / 7
        </span>
        <span className="relative 2xl:text-xl xl:text-xl lg:text-sm text-xs font-extrabold tracking-widest">
          Guide Supports
        </span>
      </div>
      <div className="absolute z-30 bottom-4 -left-40 flex flex-col items-start justify-start space-y-7">
        <span className="text-xl antialiased tracking-wide font-medium">
          Check Availability
        </span>
        <div className="inset-1 bg-slate-100 w-[60rem] h-40 rounded-lg shadow-lg px-8 py-3">
          <form className="flex flex-row items-center justify-center space-x-14">
            <div className="flex flex-row items-start justify-start space-x-1">
              <CiLocationOn className="w-14 h-14" />
              <TextField
                id="location"
                name="location"
                label="Location"
                variant="outlined"
              />
            </div>
            <div className="flex flex-row items-start justify-start space-x-1">
              <CiCalendar className="w-14 h-14" />
              <TextField
                id="pickdatestart"
                name="pickdatestart"
                label="Pick date start"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
              />
              <TextField
                id="pickdateend"
                name="pickdateend"
                label="Pick date end"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
              />
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default ArticleHeader;
