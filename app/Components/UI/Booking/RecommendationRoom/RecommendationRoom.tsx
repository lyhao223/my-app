import { Button } from "@mui/material";
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
}: IRecommendationRoomProps) => {
  return (
    <div className="ml-10 my-12 mx-4">
      <div className="rounded-xl shadow-lg bg-slate-300 px-10 py-5 w-full ">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-start space-y-3">
            <span className="text-2xl font-bold ">
              {recommendationBlockTitle}
            </span>
            <span className="text-lg">Type: {accommodationTypeName}</span>
            <div className="flex flex-col items-start justify-start space-y-2">
              <span>Check in date: {arrivalDate}</span>
              <span>Check out date: {departureDate}</span>
            </div>
            <div className="flex flex-col items-start justify-start space-y-5">
              {roomRecommendation &&
                hotelRoom[
                  roomRecommendation
                ]?.bed_configurations[0]?.bed_types.map(
                  (bed: any, index: number) => (
                    <span className="text-lg" key={index}>
                      Room {index + 1}: {bed.count} x {bed.name} - Description:
                      {bed.description}
                    </span>
                  )
                )}
            </div>
          </div>
          <div className="my-8 rounded-lg w-96 h-auto bg-blue-300">
            <div className="flex flex-col items-start justify-start space-y-3 p-8">
              <span className="text-sm font-bold">
                {Math.round(grossAmountHotel / grossAmountPerNight)} nights -
                Adutls: 4 - Children: 2 - Rooms: 2
              </span>
              <div className="flex flex-row items-center justify-center space-x-3">
                <span className="text-sm text-red-600 font-medium line-through">
                  {strikeAmouth}
                </span>
                <span className="text-lg font-bold">
                  {grossAmountHotelRounded}
                </span>
              </div>
              <span className="text-sm italic">Taxes and fees included</span>
              <Button variant="contained" color="primary" className="w-full">
                Book now{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationRoom;
