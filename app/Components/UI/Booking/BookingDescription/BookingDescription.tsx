import { Skeleton } from "@mui/material";
import React from "react";
import { BsHighlights } from "react-icons/bs";
interface IBookingDescriptionProps {
  descriptionHotel: any;
  descriptionImportantHotel: any;
  hotelTopBenefits: any;
  status: string;
}
const BookingDescription = ({
  descriptionHotel,
  hotelTopBenefits,
  descriptionImportantHotel,
  status,
}: IBookingDescriptionProps) => {
  return (
    <div className="ml-10 flex flex-row items-start justify-between">
      <div className="flex flex-col items-start justify-start space-y-7">
        <div className="flex flex-col items-start justify-start space-y-5">
          {status === "loading" ? (
            <Skeleton width={200} height={200} />
          ) : (
            <span className="text-2xl font-semibold">Description</span>
          )}
          {status === "loading" ? (
            <Skeleton width={300} height={300} />
          ) : (
            <span className="text-sm font-extralight w-[65rem] text-start">
              {descriptionHotel && `${descriptionHotel}`}
            </span>
          )}
        </div>
        {status === "loading" ? (
          <Skeleton width={300} height={300} />
        ) : (
          descriptionImportantHotel && (
            <div className="flex flex-col items-start justify-start space-y-5">
              <span className="text-2xl font-semibold">Important</span>
              <span className="text-sm font-medium w-[65rem] text-start">
                {descriptionImportantHotel}
              </span>
            </div>
          )
        )}
      </div>
      <div className="rounded-lg w-auto h-auto bg-slate-300">
        <div className="flex flex-col items-start justify-start space-y-5 px-4 py-5">
          <div className="flex flex-row items-center justify-start space-x-4">
            {status === "loading" ? (
              <Skeleton width={200} height={200} />
            ) : (
              <>
                <BsHighlights className="text-blue-500 text-xl" />
                <span className="text-xl font-medium">Highlights:</span>
              </>
            )}
          </div>
          {status === "loading" ? (
            <Skeleton width={200} height={200} />
          ) : (
            <ul className="px-8">
              {hotelTopBenefits &&
                hotelTopBenefits.map((item: any, index: number) => (
                  <li className="list-disc" key={index}>
                    {item?.translated_name}
                  </li>
                ))}
            </ul>
          )}
          {/* <span>{hotel?.data?.top_ufi_benefits?.translated_name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default BookingDescription;
