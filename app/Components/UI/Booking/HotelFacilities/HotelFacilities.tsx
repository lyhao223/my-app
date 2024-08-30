import { Skeleton } from "@mui/material";
import React from "react";
import { TiTickOutline } from "react-icons/ti";
interface IHotelFacilitiesProps {
  hotelFacilitiesArray: any;
  allFaclities: any;
  status: any;
}
const HotelFacilities = React.memo(
  ({ hotelFacilitiesArray, allFaclities, status }: IHotelFacilitiesProps) => {
    return (
      <>
        {status === "loading" ? (
          <Skeleton width={1256} height={180} />
        ) : (
          hotelFacilitiesArray && (
            <div className="my-5 2xl:ml-10 xl:ml-10 2xl:mt-32 xl:mt-32 mx-4">
              <div className="rounded-xl bg-slate-300 px-12 py-6 h-auto shadow-xl">
                <div className="flex flex-col items-start justify-start space-y-5">
                  <span className="text-2xl font-bold antialiased">
                    Hotel Facilities:
                  </span>
                  <div className="grid grid-cols-2 px-5 gap-y-8 gap-x-2 2xl:grid-cols-4 2xl:gap-x-12 xl:grid-cols-4 xl:gap-x-12 2xl:px-14 xl:px-14 md:grid-cols-3">
                    {hotelFacilitiesArray &&
                      allFaclities &&
                      allFaclities
                        .filter(
                          (facility: any) =>
                            hotelFacilitiesArray &&
                            hotelFacilitiesArray.includes(
                              facility?.id && facility?.id
                            )
                        )
                        .map((facility: any, index: number) => (
                          <span
                            className="text-sm flex flex-row items-start justify-start"
                            key={index}>
                            {facility.instances[0]?.title}
                          </span>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </>
    );
  }
);

export default HotelFacilities;
