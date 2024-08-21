"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchDetailHotel } from "@/app/services/redux/slice/detailHotelSlice";
import { store } from "@/app/services/redux/store";
import React, { useEffect, useRef } from "react";
import { Provider } from "react-redux";
interface IDetailBookingHotelProps {
  id: any;
  checkinDate?: string | any;
  checkoutDate?: string | any;
}
const BookingHotelDetail = ({ id }: IDetailBookingHotelProps) => {
  const dispatch = useAppDispatch();
  const checkinDate = useRef<any>();
  const checkoutDate = useRef<any>();
  const hotel = useAppSelector((state) => state.detailHotelSlice.hotel);
  useEffect(() => {
    const test = dispatch(
      fetchDetailHotel({
        hotelID: id,
        checkinDate: "2024-08-22",
        checkoutDate: "2024-08-29",
      })
    );
    console.log(test);
  }, [id, checkinDate, checkoutDate]);
  return (
    <div>
      {id ? id : "ID not available"}
      <div>
        {/* {hotel.map((item) => (
          <div>{item.city}</div>
        ))} */}
      </div>
    </div>
  );
};

export default BookingHotelDetail;
