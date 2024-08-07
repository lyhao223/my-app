"use client";
//Libraries
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Components
import FlyOutLink from "../../Animation/FlyOut/FlyOutLink";
import { FaCaretDown } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
//Assets
import logoBooking from "@/assets/logo/logo-light.svg";
import FlyContent from "../../Animation/FlyOut/ContentFlyOutLink/FlyContent";
import RingOut from "../../Animation/RingOut/RingOut";
import ContentInRingOut from "../../Animation/RingOut/ContentInRingOut";
import FlyOutLinkAnotherViewPort from "../../Animation/FlyOut/FlyOutLinkAnotherViewPort";

//list component
const listBooking = [
  {
    id: 1,
    name: "Hotel",
    icons: (
      <FaHotel className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-sm text-xs text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in" />
    ),
  },
  {
    id: 2,
    name: "Taxi",
    icons: (
      <FaTaxi className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-sm text-xs text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in" />
    ),
  },
  {
    id: 3,
    name: "Flights",
    icons: (
      <MdFlightTakeoff className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-sm text-xs text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in" />
    ),
  },
];

//css style

const Header = () => {
  return (
    <header className="relative flex flex-row items-center justify-start 2xl:space-x-36 xl:space-x-14 lg:space-x-7 md:space-x-2 space-x-3 min-h-full">
      {/* Logo and nav */}
      <nav className="flex flex-row items-center justify-center 2xl:space-x-10 xl:space-x-10 lg:space-x-8 md:space-x-2">
        <Link href="/">
          <Image
            src={logoBooking}
            alt="logo"
            className="max-h-full 2xl:max-w-48 xl:max-w-44 lg:max-w-48 md:max-w-36 2xl:inline-block xl:inline-block lg:inline-block md:inline-block hidden"
          />
        </Link>
        <FlyOutLinkAnotherViewPort />
        <FlyOutLink
          IconMenu={<FaCaretDown />}
          key={"booking"}
          FlyoutContent={FlyContent}>
          <span className="text-lg subpixel-antialiased ">Booking</span>
        </FlyOutLink>
        <Link href={"/"} className="2xl:inline-block xl:inline-block hidden">
          <span className="text-lg subpixel-antialiased">About</span>
        </Link>
        <Link href={"/"} className="2xl:inline-block xl:inline-block hidden">
          <span className="text-lg subpixel-antialiased">Contact</span>
        </Link>
        <Link href={"/"} className="2xl:inline-block xl:inline-block hidden">
          <span className="text-lg subpixel-antialiased">Blog</span>
        </Link>
      </nav>
      {/* Nav booking */}
      <nav className="flex flex-row items-center justify-center 2xl:space-x-4 xl:space-x-4 lg:space-x-4 md:space-x-4 space-x-2">
        {listBooking.map((item) => (
          <Link
            href={"/"}
            key={item.id}
            className="flex flex-row items-center justify-center 2xl:space-x-4 xl:space-x-4 lg:space-x-4 md:space-x-2 space-x-1 2xl:rounded-lg xl:rounded-lg lg:rounded-lg md:rounded-lg rounded-md  bg-slate-400 2xl:p-2 xl:p-2 lg:p-2 md:p-2 p-1 group hover:bg-purple-500 hover:duration-200 hover:transition-all hover:ease-in hover:text-white">
            {item.icons}
            <span className="2xl:text-lg xl:text-lg lg:text-lg md:text-sm text-xs subpixel-antialiased text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      {/* Nav user */}
      <nav className="flex flex-row items-center justify-center 2xl:space-x-8 xl:space-x-8 space-x-3">
        <RingOut Content={ContentInRingOut} />
        <div className="flex flex-row items-center justify-center 2xl:space-x-4 xl:space-x-4 space-x-2">
          <button className="text-nowrap bg-slate-500 rounded-lg 2xl:p-3 xl:p-3 lg:p-3 md:p-2  hover:bg-purple-500 hover:duration-200 hover:transition-all hover:ease-in-out">
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
