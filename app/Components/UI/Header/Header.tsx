"use client";
//Libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";

//Components
import FlyOutLink from "../../Animation/FlyOutLink/FlyOutLink";
import { FaCaretDown } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

//Assets
import logoBooking from "@/assets/logo/logo-light.svg";
import FlyContent from "../../Animation/FlyOutLink/ContentFlyOutLink/FlyContent";
const listBooking = [
  {
    id: 1,
    name: "Hotel",
    icons: (
      <FaHotel className="text-3xl text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in" />
    ),
  },
  {
    id: 2,
    name: "Taxi",
    icons: (
      <FaTaxi className="text-3xl text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in" />
    ),
  },
  {
    id: 3,
    name: "Flights",
    icons: (
      <MdFlightTakeoff className="text-3xl text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in" />
    ),
  },
];
const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between w-full">
      <nav className="flex flex-row items-center justify-center space-x-10">
        <Link href="/">
          <Image
            src={logoBooking}
            alt="logo"
            width={170}
            height={170}
            priority={true}
          />
        </Link>
        <FlyOutLink
          IconMenu={<FaCaretDown />}
          key={"booking"}
          FlyoutContent={FlyContent}>
          <span className="text-lg subpixel-antialiased ">Booking</span>
        </FlyOutLink>
        <Link href={"/"}>
          <span className="text-lg subpixel-antialiased">About</span>
        </Link>
        <Link href={"/"}>
          <span className="text-lg subpixel-antialiased">Contact</span>
        </Link>
        <Link href={"/"}>
          <span className="text-lg subpixel-antialiased">Blog</span>
        </Link>
      </nav>
      <nav className="flex flex-row items-center justify-center space-x-4">
        {listBooking.map((item) => (
          <Link
            href={"/"}
            key={item.id}
            className="flex flex-row items-center justify-center space-x-4 rounded-lg bg-slate-400 p-2 group hover:bg-purple-500 hover:duration-200 hover:transition-all hover:ease-in hover:text-white">
            {item.icons}
            <span className="text-lg subpixel-antialiased text-stone-500 group-hover:text-white group-hover:duration-200 group-hover:transition-all group-hover:ease-in">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
