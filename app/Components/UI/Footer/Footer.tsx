import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoBooking from "@/assets/logo/logo-light.svg";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import p1 from "@/assets/payment/p1.svg";
import p2 from "@/assets/payment/p2.svg";
import p3 from "@/assets/payment/p3.svg";
import p4 from "@/assets/payment/p4.svg";

import f1 from "@/assets/followus/f1.png";
import f2 from "@/assets/followus/f2.png";
import f3 from "@/assets/followus/f3.png";
import f4 from "@/assets/followus/f4.png";
const Footer = () => {
  return (
    <>
      <div className="px-12 flex flex-col items-start justify-start space-x-12">
        {/* nav-link */}
        <div className="my-10 flex flex-col space-x-0 space-y-10 2xl:flex-row xl:flex-row lg:flex-row md:flex-row items-start justify-start 2xl:space-x-64 xl:space-x-44 lg:space-x-28 md:space-x-14">
          {/* info */}
          <div className="flex flex-col items-start justify-start space-y-4">
            <Link href="/">
              <img src={logoBooking.src} alt="logo" className="w-48" />
            </Link>
            <div className="w-72 text-wrap">
              <span className="text-lg">
                Departure defective arranging rapturous did believe him all had
                supported.
              </span>
            </div>
            <div className="flex flex-col items-start justify-start space-y-2">
              <div className="flex flex-row items-start justify-start space-x-5">
                <FaPhone className="text-2xl text-black" />
                <span>+123 456 789</span>
              </div>
              <div className="flex flex-row items-start justify-start space-x-5">
                <MdEmail className="text-2xl text-black" />
                <span>lyhao2203@gmail.com</span>
              </div>
            </div>
          </div>

          {/* nav-page */}
          <div className="flex flex-col items-start justify-start space-y-6">
            <span className="text-xl font-bold">Page</span>
            <ul className="flex flex-col items-start justify-start space-y-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>

          {/* nav-Link */}
          <div className="flex flex-col items-start justify-start space-y-6">
            <span className="text-xl font-bold">Link</span>
            <ul className="flex flex-col items-start justify-start space-y-1">
              <li>
                <Link href="/">Sign up</Link>
              </li>
              <li>
                <Link href="/">Sign in</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Term</Link>
              </li>
              <li>
                <Link href="/">Cookies</Link>
              </li>
              <li>
                <Link href="/">Supoort</Link>
              </li>
            </ul>
          </div>

          {/* nav-booking */}
          <div className="flex flex-col items-start justify-start space-y-6">
            <span className="text-xl font-bold">Booking</span>
            <ul className="flex flex-col items-start justify-start space-y-5">
              <li>
                <Link
                  href="/"
                  className="flex flex-row items-start justify-start space-x-3">
                  <FaHotel className="text-2xl text-black" />
                  <span>Hotel</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex flex-row items-start justify-start space-x-3">
                  <FaTaxi className="text-2xl text-black" />
                  <span>Taxi</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex flex-row items-start justify-start space-x-3">
                  <MdFlightTakeoff className="text-2xl text-black" />
                  <span>Flights</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* payment security*/}
      </div>
      <div className="mx-12 flex flex-col items-start space-y-4 justify-start 2xl:flex-row 2xl:items-start 2xl:justify-between 2xl:space-y-0 xl:flex-row xl:items-start xl:justify-between xl:space-y-0 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 md:flex-row md:items-start md:justify-between md:space-y-0">
        <div className="flex flex-col items-start justify-start space-y-2">
          <span className="text-lg font-bold tracking-wider text-start">
            Payment & security
          </span>
          <div className="flex flex-row items-start justify-start space-x-4">
            <img src={p1.src} alt="payment" className="w-10 h-10" />
            <img src={p2.src} alt="payment" className="w-10 h-10" />
            <img src={p3.src} alt="payment" className="w-10 h-10" />
            <img src={p4.src} alt="payment" className="w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-col items-start 2xl:items-end xl:items-end lg:items-end md:items-end justify-end space-y-2">
          <span className="text-lg font-bold tracking-wider">Follow us</span>
          <div className="flex flex-row items-start justify-start space-x-4">
            <img src={f1.src} className="w-7 h-7" />
            <img src={f2.src} className="w-7 h-7" />
            <img src={f3.src} className="w-7 h-7" />
            <img src={f4.src} className="w-7 h-7" />
          </div>
        </div>
      </div>
      <div className="mx-12 border-b-2 border-gray-300 min-w-fit my-3" />
      <div className="mx-12 flex flex-col space-y-8 2xl:flex-row xl:flex-row lg:flex-row md:flex-row items-start justify-between 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0">
        <div className="flex flex-row items-start justify-start">
          <span className="text-sm text-gray-200">
            Copyrights ©2024 Booking. Build by Hao.
          </span>
        </div>
        <div className="flex flex-row items-start justify-start space-x-3 text-sm">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Term</Link>
          <Link href="/">Cookies</Link>
          <Link href="/">Supoort</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
