"use client";
import BookingHotelDetail from "@/app/Components/UI/Booking/BookingHotelDetail/BookingHotelDetail";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchDetailHotel } from "@/app/services/redux/slice/detailHotelSlice";
import { store } from "@/app/services/redux/store";

import React, { useEffect } from "react";
import { Provider } from "react-redux";

const Page = ({ params }: { params: { id: any } }) => {
  return (
    <Provider store={store}>
      <div className="px-36 my-12">
        <BookingHotelDetail id={params.id} />
      </div>
    </Provider>
  );
};

export default Page;
