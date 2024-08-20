"use client";
import React from "react";
import b1 from "@/assets/booking/b1.jpeg";
import FormSearchHotel from "../ContentHeader/FormSearchHotel";
import { Provider } from "react-redux";
import { store } from "@/app/services/redux/store";
import { useAppSelector } from "@/app/services/redux/hooks/hooks";
const BookingIndex = () => {
  const hotels = useAppSelector((state) => state.searchHotel.hotels);
  return (
    <div className="relative z-10">
      <img
        src={b1.src}
        className="w-full h-60 2xl:h-full xl:h-full lg:h-full md:h-full"
      />
      <div className="absolute z-20 2xl:top-32 2xl:left-60 xl:top-32 xl:left-60 lg:top-10 lg:left-28">
        <div className="hidden 2xl:flex xl:flex lg:flex flex-col items-start justify-start space-y-2">
          <span className="text-white font-bold text-5xl antialiased">
            A place to stay like home
          </span>
          <span className="text-white font-bold text-5xl antialiased">
            for the next trip
          </span>
          <span className="text-white font-bold text-5xl antialiased">
            Enjoy all the space for yourself
          </span>
        </div>
      </div>
      <div className="absolute z-10 2xl:-bottom-10 2xl:left-96 xl:-bottom-10 xl:left-44 lg:-bottom-12 lg:left-12 md:-bottom-52 md:left-16 ls:left-9 left-3 -bottom-56">
        <div className="w-full h-full border-2 p-5 border-slate-300 bg-slate-200 rounded-xl shadow-lg">
          <FormSearchHotel />
        </div>
      </div>
    </div>
  );
};

export default BookingIndex;
