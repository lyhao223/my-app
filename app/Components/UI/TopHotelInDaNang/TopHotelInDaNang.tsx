"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchHotelInDaNangWithHighScore } from "@/app/services/redux/slice/danangHotel";
import React, { use, useEffect } from "react";

const TopHotelInDaNang = () => {
  const dispatch = useAppDispatch();
  const hotelInDaNang = useAppSelector((state) => state.danangHotel.hotels);
  useEffect(() => {
    const test = dispatch(fetchHotelInDaNangWithHighScore());
    console.log(test);
  }, [dispatch]);
  return (
    <div className="">
      {hotelInDaNang.map((hotel: any) => {
        const updatedPhotoUrl = hotel.photoUrls[0].replace(
          "square60",
          "square500"
        );
        return (
          <div key={hotel.id}>
            <div>{hotel.name}</div>
            <div>{hotel.reviewScore}</div>
            <div>
              <img src={updatedPhotoUrl} alt="photo" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopHotelInDaNang;
