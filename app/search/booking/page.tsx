"use client";
import BookingIndex from "@/app/Components/UI/Booking/BookingIndex";
import BookingSearch from "@/app/Components/UI/Booking/BookingSearch/BookingSearch";
import { store } from "@/app/services/redux/store";
import React from "react";
import { Provider } from "react-redux";

const Page = () => {
  return (
    <div className="mb-14">
      <Provider store={store}>
        <BookingIndex />
        <BookingSearch />
      </Provider>
    </div>
  );
};

export default Page;
