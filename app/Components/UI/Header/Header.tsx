"use client";
//Libraries
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Components
import FlyOutLink from "@/app/Components/Animation/FlyOut/FlyOutLink";
import { FaCaretDown } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

//Assets
import logoBooking from "@/assets/logo/logo-light.svg";
import FlyContent from "../../Animation/FlyOut/ContentFlyOutLink/FlyContent";
import RingOut from "../../Animation/RingOut/RingOut";
import ContentInRingOut from "../../Animation/RingOut/ContentInRingOut";
import FlyOutLinkAnotherViewPort from "../../Animation/FlyOut/FlyOutLinkAnotherViewPort";

//css style

const Header = () => {
  return (
    <header className="relative flex flex-row items-center justify-center 2xl:space-x-36 xl:space-x-14 lg:space-x-7 md:space-x-2 space-x-3 min-h-full">
      {/* Logo and nav */}
      <nav className="flex flex-row items-center justify-center 2xl:space-x-10 xl:space-x-10 lg:space-x-8 md:space-x-2 space-x-2">
        <Link href="/">
          <Image
            src={logoBooking}
            alt="logo"
            className="max-h-full 2xl:max-w-48 xl:max-w-44 lg:max-w-48 md:max-w-36"
          />
        </Link>

        <Link href={"search/booking"}>
          <span className="text-lg subpixel-antialiased ">Booking</span>
        </Link>
        <Link href={"/about"}>
          <span className="text-lg subpixel-antialiased">About</span>
        </Link>
        <Link href={"/"}>
          <span className="text-lg subpixel-antialiased">Contact</span>
        </Link>
        <Link href={"/"}>
          <span className="text-lg subpixel-antialiased">Blog</span>
        </Link>
      </nav>

      {/* Nav user */}
      <nav className="flex flex-row items-center justify-center 2xl:space-x-8 xl:space-x-8 space-x-2">
        <RingOut Content={ContentInRingOut} />
        <div className="flex flex-row items-center justify-center 2xl:space-x-4 xl:space-x-4 space-x-2">
          <button className="text-nowrap bg-slate-500 rounded-lg 2xl:p-3 xl:p-3 lg:p-3 md:p-2 ms:p-1 ls:p-1 xs:p-[0.125rem]  hover:bg-purple-500 hover:duration-200 hover:transition-all hover:ease-in-out">
            <span className="text-white 2xl:text-base xl:text-base lg:text-base text-sm">
              Sign in
            </span>
          </button>
          <button className="text-nowrap bg-slate-500 rounded-lg 2xl:p-3 xl:p-3 lg:p-3 md:p-2 2xl:inline-block xl:inline-block lg:inline-block md:inline-block hidden hover:bg-purple-500 hover:duration-200 hover:transition-all hover:ease-in-out">
            <span className="text-white 2xl:text-base xl:text-base lg:text-base text-sm">
              Sign up
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
