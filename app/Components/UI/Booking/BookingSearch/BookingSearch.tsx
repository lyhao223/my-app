import { useAppSelector } from "@/app/services/redux/hooks/hooks";
import React from "react";
import BookingSearchList from "./BookingSearchList";

const BookingSearch = () => {
  return (
    <div className="mt-24 px-36">
      {/* {hotels.length <= 0 ? (
        <div className="text-center text-2xl text-red-600">No hotels found</div>
      ) : (
        <BookingSearchList />
      )} */}
      <BookingSearchList />
    </div>
  );
};

export default BookingSearch;
