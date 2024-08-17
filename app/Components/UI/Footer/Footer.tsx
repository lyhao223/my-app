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
const Footer = () => {
  return (
    <div className="mx-36 flex flex-col items-start justify-start space-x-12">
      {/* nav-link */}
      <div className="my-20 flex flex-row items-start justify-start space-x-32">
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
      <div className="flex flex-col items-start justify-between space-y-3">
        <span className="-mx-12 text-lg font-bold tracking-wider">
          Payment & security
        </span>
        <div className="-mx-12 flex flex-row items-start justify-start space-x-4">
          <img src={p1.src} alt="payment" className="w-10 h-10" />
          <img src={p2.src} alt="payment" className="w-10 h-10" />
          <img src={p3.src} alt="payment" className="w-10 h-10" />
          <img src={p4.src} alt="payment" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
