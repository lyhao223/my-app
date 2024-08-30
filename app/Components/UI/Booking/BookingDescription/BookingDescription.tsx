import { Skeleton } from "@mui/material";
import React from "react";
import { BsHighlights } from "react-icons/bs";
interface IBookingDescriptionProps {
  descriptionHotel: any;
  descriptionImportantHotel: any;
  hotelTopBenefits: any;
  status: string;
}
const BookingDescription = React.memo(
  ({
    descriptionHotel,
    hotelTopBenefits,
    descriptionImportantHotel,
    status,
  }: IBookingDescriptionProps) => {
    return (
      <div className="mx-3 2xl:ml-10 xl:ml-10 flex flex-col items-start justify-start space-x-0 space-y-3 2xl:flex-row xl:flex-row  2xl:items-start 2xl:justify-between xl:items-start xl:justify-between">
        <div className="flex flex-col items-start justify-start space-y-7">
          <div className="flex flex-col items-start justify-start space-y-5">
            {status === "loading" ? (
              <Skeleton width={121} height={32} />
            ) : (
              <span className="text-2xl font-semibold">Description</span>
            )}
            {status === "loading" ? (
              <Skeleton width={1040} height={180} />
            ) : (
              descriptionHotel && (
                <span className="text-sm font-extralight 2xl:w-[65rem] xl:w-[65rem] lg:w-[57rem] text-start">
                  {`${descriptionHotel}`}
                </span>
              )
            )}
          </div>
          {status === "loading" ? (
            <Skeleton width={121} height={32} />
          ) : (
            descriptionImportantHotel && (
              <div className="flex flex-col items-start justify-start space-y-5">
                <span className="text-2xl font-semibold">Important</span>
                {status === "loading" ? (
                  <Skeleton width={1040} height={180} />
                ) : (
                  descriptionImportantHotel && (
                    <span className="text-sm font-medium 2xl:w-[65rem] xl:w-[65rem] lg:w-[57rem] w-auto text-wrap text-start">
                      {descriptionImportantHotel}
                    </span>
                  )
                )}
              </div>
            )
          )}
        </div>
        {status === "loading" ? (
          <Skeleton width={220} height={256} />
        ) : (
          <div className="rounded-lg w-auto h-auto bg-slate-300">
            <div className="flex flex-col items-start justify-start space-y-5 px-4 py-5">
              <div className="flex flex-row items-center justify-start space-x-4">
                {status === "loading" ? (
                  <Skeleton width={95} height={28} />
                ) : (
                  <>
                    <BsHighlights className="text-blue-500 text-xl" />
                    <span className="text-xl font-medium">Highlights:</span>
                  </>
                )}
              </div>
              {status === "loading" ? (
                <Skeleton width={188} height={168} />
              ) : (
                hotelTopBenefits && (
                  <ul className="px-8">
                    {hotelTopBenefits &&
                      hotelTopBenefits.map((item: any, index: number) => (
                        <li className="list-disc" key={index}>
                          {item?.translated_name}
                        </li>
                      ))}
                  </ul>
                )
              )}
              {/* <span>{hotel?.data?.top_ufi_benefits?.translated_name}</span> */}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default BookingDescription;
