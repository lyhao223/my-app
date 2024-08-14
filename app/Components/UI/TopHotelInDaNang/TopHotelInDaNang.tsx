"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchHotelInDaNangWithHighScore } from "@/app/services/redux/slice/danangHotel";
import React, { use, useEffect } from "react";
import { DaNangHotel_DUMMY_DATA } from "@/app/utils/carouselHotelDaNang/DaNangHotel_DUMMY_DATA";
import Carousel from "react-multi-carousel";
import { responsive } from "@/app/utils/carousel/ResponsiveCarousel";
import Link from "next/link";
const TopHotelInDaNang = (props: { deviceType?: string }) => {
  const dispatch = useAppDispatch();
  const hotelInDaNang = useAppSelector((state) => state.danangHotel.hotels);
  const { deviceType } = props;
  useEffect(() => {
    const test = dispatch(fetchHotelInDaNangWithHighScore());
    console.log(test);
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <h1 className="antialiased text-5xl font-bold">
          Hotel Da Nang In Viet Nam
        </h1>
      </div>
      <Carousel
        responsive={responsive}
        ssr={true}
        showDots
        infinite
        containerClass="py-9 "
        deviceType={deviceType}
        removeArrowOnDeviceType={["table", "mobiles"]}>
        {hotelInDaNang.map((hotel) => {
          const updatedPhotoUrl = hotel.photoUrls[0].replace(
            "square60",
            "square500"
          );
          return (
            <div className="flex items-center justify-center">
              <Link
                key={hotel.id}
                href={"/"}
                className="mt-4 grid grid-rows-3 w-56 gap-x-5">
                <div className="row-span-3 mb-8">
                  <img
                    src={updatedPhotoUrl}
                    alt={hotel.name}
                    className="h-full w-full rounded-xl shadow-xl"
                  />
                </div>

                <div className="flex flex-row items-start justify-between my-2">
                  <h1 className="text-xl font-bold antialiased text-wrap w-64 ">
                    {hotel.name}
                  </h1>
                  <p className="text-lg font-thin antialiased">
                    Score: {hotel.reviewScore}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-2">
                  <span className="line-through text-xs text-gray-400">
                    {hotel.priceBreakdown.strikethroughPrice?.amountRounded}
                  </span>
                  <span className="text-lg font-medium">
                    {hotel.priceBreakdown.grossPrice?.amountRounded}
                  </span>
                </div>
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-col items-start justify-start space-y-1">
                    <span className="text-sm font-medium">
                      Check in: {hotel.checkinDate}
                    </span>
                    <span className="text-sm font-medium">
                      Check out: {hotel.checkoutDate}
                    </span>
                  </div>
                  <div className="flex flex-col items-end justify-end spacep-y-1">
                    <span className="text-sm font-medium">
                      Until: {hotel.checkin.untilTime}
                    </span>
                    <span className="text-sm font-medium">
                      From: {hotel.checkin.fromTime}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default TopHotelInDaNang;
