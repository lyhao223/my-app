"use client";
import BookingIndex from "@/app/Components/UI/Booking/BookingIndex";
import BookingSearch from "@/app/Components/UI/Booking/BookingSearch/BookingSearch";
import { store } from "@/app/services/redux/store";
import React, { Suspense } from "react";
import { Provider } from "react-redux";

const Page = () => {
  return (
    <Provider store={store}>
      <div className="mb-14">
        <BookingIndex />
        <Suspense>
          <BookingSearch />
        </Suspense>
      </div>
    </Provider>
  );
};

export default Page;
