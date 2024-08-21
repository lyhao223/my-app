import { useAppSelector } from "@/app/services/redux/hooks/hooks";
import React from "react";
import BookingSearchList from "./BookingSearchList";
import Loading from "@/app/utils/Reuseable/Loading";

const BookingSearch = () => {
  const hotels = useAppSelector((state) => state.searchHotel.hotels);
  const status = useAppSelector((state) => state.searchHotel.status);
  return (
    <div className="mt-24 px-36">
      {hotels.length <= 0 ? (
        <div className="2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-72 text-center -ml-9 text-nowrap text-2xl text-red-600">
          No hotels found
        </div>
      ) : status === "loading" ? (
        <div className="flex flex-col items-center justify-center 2xl:mt-0 xl:mt-0 lg:mt-0 mt-60">
          <Loading>Searching for hotels</Loading>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center 2xl:mt-0 xl:mt-0 lg:mt-0 mt-60">
          <BookingSearchList />
        </div>
      )}
      {/* <BookingSearchList /> */}
    </div>
  );
};

export default BookingSearch;
