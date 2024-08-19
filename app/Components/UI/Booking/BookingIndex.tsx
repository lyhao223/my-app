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
      <img src={b1.src} />
      <div className="absolute z-20 top-32 left-60">
        <div className="flex flex-col items-start justify-start space-y-2">
          <span className="text-white font-bold text-5xl antialiased">
            A place to stay like home for the next trip
          </span>
          <span className="text-white font-bold text-5xl antialiased">
            for the next trip
          </span>
          <span className="text-white font-bold text-5xl antialiased">
            Enjoy all the space for yourself
          </span>
        </div>
      </div>
      <div className="absolute z-10 -bottom-10 left-80">
        <div className="w-full h-full border-2 p-5 border-slate-300 bg-slate-200 rounded-xl shadow-lg">
          <FormSearchHotel />
        </div>
      </div>
    </div>
  );
};

export default BookingIndex;
