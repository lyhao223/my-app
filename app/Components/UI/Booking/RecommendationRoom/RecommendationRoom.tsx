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
}
const RecommendationRoom = React.memo(
  ({
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
  }: IRecommendationRoomProps) => {
    return (
      <>
        {status === "loading" ? (
          <Skeleton width={1264} height={320} />
        ) : (
          <div className="mx-2 2xl:ml-10 xl:ml-10 my-12">
            <div className="rounded-xl shadow-lg bg-slate-300 px-10 py-5 w-full ">
              <div className="flex flex-col items-start justify-start 2xl:flex-row 2xl:items-start 2xl:justify-between xl:flex-row xl:items-start xl:justify-between">
                <div className="flex flex-col items-start justify-start space-y-3">
                  {recommendationBlockTitle && (
                    <span className="text-2xl font-bold ">
                      {recommendationBlockTitle}
                    </span>
                  )}
                  {accommodationTypeName && (
                    <span className="text-lg">
                      Type: {accommodationTypeName}
                    </span>
                  )}
                  {arrivalDate && departureDate && (
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <span>Check in date: {arrivalDate}</span>
                      <span>Check out date: {departureDate}</span>
                    </div>
                  )}
                  {roomRecommendation && hotelRoom && (
                    <div className="flex flex-col items-start justify-start space-y-5">
                      {hotelRoom[
                        roomRecommendation
                      ]?.bed_configurations[0]?.bed_types.map(
                        (bed: any, index: number) => (
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
                    {grossAmountHotel && grossAmountPerNight && (
                      <span className="text-sm font-bold">
                        {Math.round(grossAmountHotel / grossAmountPerNight)}{" "}
                        nights - Adutls: 4 - Children: 2 - Rooms: 2
                      </span>
                    )}
                    {strikeAmouth && grossAmountHotelRounded && (
                      <div className="flex flex-col space-x-0 space-y-3 2xl:flex-row 2xl:items-center 2xl:justify-center xl:flex-row xl:items-center xl:justify-center lg:flex-row lg:items-center lg:justify-center 2xl:space-x-3 xl:space-x-3 lg:space-x-3">
                        <span className="text-sm text-red-600 font-medium line-through">
                          {strikeAmouth}
                        </span>
                        <span className="text-lg font-bold">
                          {grossAmountHotelRounded}
                        </span>
                      </div>
                    )}
                    <span className="text-sm italic">
                      Taxes and fees included
                    </span>
                    <Link href={`/search/booking/hotel/${id}/process-booking`}>
                      <Button
                        variant="contained"
                        color="primary"
                        className="w-full">
                        Book now{" "}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default RecommendationRoom;
