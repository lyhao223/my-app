import { Button, Skeleton } from "@mui/material";
import Link from "next/link";
import React from "react";
interface IRecommendationRoomProps {
  recommendationBlockTitle: any;
  accommodationTypeName: any;
  arrivalDate: any;
  departureDate: any;
  roomRecommendation: any;
  hotelRoom: any;
  grossAmountHotel: any;
  grossAmountPerNight: any;
  strikeAmouth: any;
  grossAmountHotelRounded: any;
  status: any;
  id: any;
  roomID: any;
  adults: any;
  child: any;
  roomChoose: any;
}
const RecommendationRoom = ({
  recommendationBlockTitle,
  accommodationTypeName,
  arrivalDate,
  departureDate,
  roomRecommendation,
  hotelRoom,
  grossAmountHotel,
  grossAmountPerNight,
  strikeAmouth,
  grossAmountHotelRounded,
  status,
  id,
  roomID,
  adults,
  child,
  roomChoose,
}: IRecommendationRoomProps) => {
  return (
    <div className="mx-2 2xl:ml-10 xl:ml-10 my-12">
      <div className="rounded-xl shadow-lg bg-slate-300 px-10 py-5 w-full ">
        <div className="flex flex-col items-start justify-start 2xl:flex-row 2xl:items-start 2xl:justify-between xl:flex-row xl:items-start xl:justify-between">
          <div className="flex flex-col items-start justify-start space-y-3">
            {status === "loading" ? (
              <Skeleton width={510} height={32} />
            ) : (
              recommendationBlockTitle && (
                <span className="text-2xl font-bold ">
                  {recommendationBlockTitle}
                </span>
              )
            )}
            {status === "loading" ? (
              <Skeleton width={100} height={28} />
            ) : (
              accommodationTypeName && (
                <span className="text-lg">Type: {accommodationTypeName}</span>
              )
            )}
            {status === "loading" ? (
              <Skeleton width={400} height={48} />
            ) : (
              arrivalDate &&
              departureDate && (
                <div className="flex flex-col items-start justify-start space-y-2">
                  <span>Check in date: {arrivalDate}</span>
                  <span>Check out date: {departureDate}</span>
                </div>
              )
            )}
            {roomRecommendation && hotelRoom && (
              <div className="flex flex-col items-start justify-start space-y-5">
                {hotelRoom[
                  roomRecommendation
                ]?.bed_configurations[0]?.bed_types.map(
                  (bed: any, index: number) =>
                    status === "loading" ? (
                      <Skeleton width={430} height={28} />
                    ) : (
                      <span className="text-lg" key={index}>
                        Room {index + 1}: {bed.count} x {bed.name} -
                        Description:
                        {bed.description}
                      </span>
                    )
                )}
              </div>
            )}
          </div>
          <div className="my-8 rounded-lg w-56 2xl:w-96 xl:w-96 lg:w-96 md:w-96 h-auto bg-blue-300">
            <div className="flex flex-col items-start justify-start space-y-3 p-4 2xl:p-8 xl:p-8 ">
              {status === "loading" ? (
                <Skeleton width={261} height={20} />
              ) : (
                grossAmountHotel &&
                grossAmountPerNight && (
                  <span className="text-sm font-bold">
                    {Math.round(grossAmountHotel / grossAmountPerNight)} nights
                    - Adutls: {adults} - Children: {child} - Rooms: {roomChoose}
                  </span>
                )
              )}
              {strikeAmouth && grossAmountHotelRounded && (
                <div className="flex flex-col space-x-0 space-y-3 2xl:flex-row 2xl:items-center 2xl:justify-center xl:flex-row xl:items-center xl:justify-center lg:flex-row lg:items-center lg:justify-center 2xl:space-x-3 xl:space-x-3 2xl:space-y-0 xl:space-y-0 lg:space-y-0 lg:space-x-3">
                  {status === "loading" ? (
                    <Skeleton width={100} height={28} />
                  ) : (
                    <span className="text-sm text-red-600 font-medium line-through">
                      {strikeAmouth}
                    </span>
                  )}
                  {status === "loading" ? (
                    <Skeleton width={100} height={28} />
                  ) : (
                    <span className="text-lg font-bold">
                      {grossAmountHotelRounded}
                    </span>
                  )}
                </div>
              )}
              {status === "loading" ? (
                <Skeleton width={150} height={28} />
              ) : (
                <span className="text-sm italic">Taxes and fees included</span>
              )}
              {status === "loading" ? (
                <Skeleton width={105} height={32} />
              ) : (
                <Link
                  href={`/search/booking/hotel/${id}/process-booking/${roomID}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full">
                    Book now{" "}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecommendationRoom;
