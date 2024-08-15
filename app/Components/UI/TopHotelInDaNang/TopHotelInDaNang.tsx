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
        <h1 className="antialiased 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl ms:text-3xl ls:text-3xl xs:text-2xl font-bold">
          Hotel Da Nang In Viet Nam
        </h1>
      </div>

      <Carousel
        responsive={responsive}
        ssr={true}
        showDots={false}
        infinite
        containerClass="py-9 "
        deviceType={deviceType}
        removeArrowOnDeviceType={["tablet", "mobile"]}>
        {hotelInDaNang.map((hotel) => {
          const updatedPhotoUrl = hotel.photoUrls[0].replace(
            "square60",
            "square500"
          );
          return (
            <div
              key={hotel.id}
              className="flex items-center 2xl:justify-center xl:justify-center ld:justify-center md:justify-center ls:justify-center ms:justify-center xs:justify-center">
              <Link
                key={hotel.id}
                href={"/"}
                className="mt-4 grid grid-rows-3 2xl:w-80 xl:w-80 lg:w-80 md:w-[21rem] ls:w-full ms:w-full xs:w-64 gap-x-5">
                <div className="row-span-3 mb-8">
                  <img
                    src={updatedPhotoUrl}
                    alt={hotel.name}
                    className="h-full w-full rounded-xl shadow-xl"
                  />
                </div>

                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row ls:flex-row ms:flex-row xs:flex-col items-start 2xl:justify-between xl:justify-between lg:justify-between md:justify-between ls:justify-between ms:justify-between xs:justify-start my-2">
                  <h1 className="text-xl font-bold antialiased text-wrap w-64 ">
                    {hotel.name}
                  </h1>
                  <p className="text-lg font-thin antialiased text-nowrap">
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
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row ls:flex-row ms:flex-row xs:flex-col items-start 2xl:justify-between xl:justify-between lg:justify-between md:justify-between ls:justify-between ms:justify-between xs:justify-start">
                  <div className="flex flex-col items-start justify-start space-y-1">
                    <span className="text-sm font-medium">
                      Check in: {hotel.checkinDate}
                    </span>
                    <span className="text-sm font-medium">
                      Check out: {hotel.checkoutDate}
                    </span>
                  </div>
                  <div className="flex flex-col 2xl:items-end 2xl:justify-end xl:items-end xl:justify-end lg:items-end lg:justify-end md:items-end md:justify-end ls:items-end ls:justify-end ms:items-end ms:justify-end xs:items-start xs:justify-start space-y-1">
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
