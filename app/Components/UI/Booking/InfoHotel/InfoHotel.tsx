import { Skeleton } from "@mui/material";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

interface IInfoHotelProps {
  hotelName: any;
  hotelAddressLine: any;
  hotelAccommodationTypeName: any;
  hotelHostSince: any;
  hotelHostName: any;
  hotelHostScoreCount: any;
  hotelHostScores: any;
  status: string;
  reviewScoresWord: any;
  reviewScoresCount: any;
  reviewScoresEnd: any;
}
const InfoHotel = ({
  hotelName,
  hotelAddressLine,
  hotelAccommodationTypeName,
  hotelHostSince,
  hotelHostName,
  hotelHostScores,
  hotelHostScoreCount,
  status,
  reviewScoresWord,
  reviewScoresCount,
  reviewScoresEnd,
}: IInfoHotelProps) => {
  return (
    <div className="ml-10 flex flex-row items-start justify-between">
      <div className="flex flex-col items-start justify-start space-y-5">
        {status === "loading" ? (
          <Skeleton width={500} height={50} />
        ) : (
          <span className="text-2xl font-semibold">{hotelName}</span>
        )}
        <div className="flex flex-row items-start justify-start space-x-2">
          {status === "loading" ? (
            <Skeleton width={200} height={50} />
          ) : (
            <>
              {hotelAddressLine && <FaLocationDot className="text-red-500" />}
              <span className="text-lg font-medium">
                {hotelAddressLine && `${hotelAddressLine}.`}
              </span>
            </>
          )}
        </div>
        <span className="text-lg font-medium">
          {status === "loading" ? (
            <Skeleton width={200} height={50} />
          ) : (
            hotelAccommodationTypeName &&
            `Accommodation: ${hotelAccommodationTypeName}.`
          )}
        </span>
        <span className="text-sm italic">
          {status === "loading" ? (
            <Skeleton width={200} height={50} />
          ) : (
            hotelHostSince && `${hotelHostSince}`
          )}
        </span>
        <span className="text-sm italic">
          {status === "loading" ? (
            <Skeleton width={200} height={50} />
          ) : (
            hotelHostName && `Host name: ${hotelHostName}`
          )}
        </span>
      </div>
      <div className="flex flex-col items-start justify-start space-y-3">
        {status === "loading" ? (
          <Skeleton width={100} height={100} />
        ) : (
          <div className="rounded-lg shadow-lg w-44 h-16">
            <div className="mx-2 my-2 flex flex-row items-start justify-end space-x-5">
              <div className="flex flex-col items-start justify-start text-sm font-bold">
                <span>{reviewScoresWord}</span>
                <span>{reviewScoresCount} reviews</span>
              </div>
              <div className="py-3 rounded-lg w-12 h-12 bg-blue-500 ">
                <span className="text-white mx-2 font-bold">
                  {reviewScoresEnd}
                </span>
              </div>
            </div>
          </div>
        )}
        {status === "loading" ? (
          <Skeleton width={100} height={100} />
        ) : (
          <div className="rounded-lg shadow-lg w-44 h-16">
            <div className="mx-2 my-2 flex flex-row items-start justify-end space-x-5">
              <div className="flex flex-col items-start justify-start text-sm font-bold">
                <span>Host score</span>
                <span>
                  {hotelHostScoreCount && hotelHostScoreCount} reviews
                </span>
              </div>
              <div className="py-3 rounded-lg w-12 h-12 bg-blue-500 ">
                <span className="text-white mx-2 font-bold">
                  {hotelHostScores && hotelHostScores.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoHotel;
