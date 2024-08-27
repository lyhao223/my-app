import Image from "next/image";
import React from "react";
import h1 from "@/assets/hotels/h1.webp";
import { Skeleton } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";

interface ICardHotelProps {
  image: string | any;
  hotelName: string;

  reviews: number;
  score: number;
  scoreWord: string;
  checkInUntilTime: string;
  checkInFromTime: string;
  checkOutUntilTime: string;
  checkOutFromTime: string;
  price?: number;
  discountPrice: number;
  id: string;
  loading: any;
}
const CardHotel = ({
  image,
  hotelName,
  reviews,
  score,
  scoreWord,
  checkInUntilTime,
  checkInFromTime,
  checkOutUntilTime,
  checkOutFromTime,
  price,
  discountPrice,
  id,
  loading,
}: ICardHotelProps) => {
  return (
    <div
      key={id}
      className="2xl:w-[70rem] xl:w-full lg:w-fit md:w-full ls:w-full ms:w-80 xs:w-72 h-auto bg-slate-100 rounded-lg shadow-xl px-14 py-9">
      <div className="flex flex-col items-center justify-center 2xl:grid xl:grid lg:grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 grid-flow-row 2xl:gap-x-16 xl:gap-x-5 lg:space-x-6 ">
        {/*img*/}
        {loading === "loading" ? (
          <Skeleton width="100%" height={150} />
        ) : (
          <div className="row-span-2 2xl:col-span-1 xl:col-span-1 lg:col-span-1">
            <Image
              src={image}
              alt="hotel"
              className="w-fit h-full rounded-lg"
            />
          </div>
        )}
        {/*content*/}
        <div className="row-span-2 2xl:col-span-2 xl:col-span-2 lg:col-span-2 w-fit">
          <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start lg:items-start lg:justify-start space-y-6">
            <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start lg:items-start lg:justify-start space-y-3">
              <span className="2xl:text-wrap xl:text-nowrap lg:text-nowrap md:text-nowrap text-wrap text-center 2xl:text-start xl:text-start lg:text-start w-full text-lg font-semibold antialiased">
                {loading === "loading" ? <Skeleton width={200} /> : hotelName}
              </span>
              <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start lg:items-start lg:justify-start">
                <span className="text-sm">
                  Check in:{" "}
                  <span className="text-start">
                    {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `${checkInUntilTime} - ${checkInFromTime}`
                    )}
                  </span>
                </span>
                <span className="text-sm">
                  Check out:{" "}
                  <span className="text-start">
                    {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `${checkOutUntilTime} - ${checkOutFromTime}`
                    )}
                  </span>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start lg:items-start lg:justify-start">
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  price && (
                    <span className="line-through text-red-600 text-sm">
                      {price}
                    </span>
                  )
                )}
                {loading ? (
                  <Skeleton width={100} height={30} />
                ) : (
                  discountPrice && (
                    <span className="text-lg font-bold text-nowrap">
                      {discountPrice}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/*rating and price*/}
        <div className="row-span-1 2xl:col-span-1 xl:col-span-1 lg:col-span-1">
          <div className="flex flex-col items-center justify-center 2xl:items-end 2xl:justify-end xl:items-end xl:justify-end lg:items-end lg:justify-end space-y-4">
            <div className="flex flex-row items-start justify-start space-x-2">
              <div className="flex flex-col items-start justify-start">
                <span>Reviews</span>
                {loading ? <Skeleton width={50} /> : <span>{reviews}</span>}
              </div>
              <div className="w-fit h-fit">
                {loading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <div className="p-3 rounded-xl bg-blue-500">
                    <span className="text-white">{score}</span>
                  </div>
                )}
              </div>
            </div>
            {loading ? (
              <Skeleton width={100} />
            ) : (
              <span className="text-sm text-black font-bold text-nowrap">
                Score word: {scoreWord}
              </span>
            )}
            <Link
              href={`/search/booking/hotel/${id}`}
              className="rounded-lg bg-blue-500 px-5 py-4 text-nowrap">
              {loading ? (
                <Skeleton width={100} />
              ) : (
                <span className="text-lg font-bold antialiased text-slate-100">
                  Look for detail
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHotel;
