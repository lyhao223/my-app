"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchDetailHotel } from "@/app/services/redux/slice/detailHotelSlice";
import { getPhotoHotel } from "@/app/services/redux/slice/fetchPhotoHotel";
import React, { useEffect, useRef } from "react";
interface IDetailBookingHotelProps {
  id: any;
  checkinDate?: string | any;
  checkoutDate?: string | any;
}
const BookingHotelDetail = ({ id }: IDetailBookingHotelProps) => {
  const dispatch = useAppDispatch();
  const checkinDate = useAppSelector((state) => state.searchHotel.checkinDate);
  const checkoutDate = useAppSelector(
    (state) => state.searchHotel.checkoutDate
  );

  // useEffect(() => {
  //   if (id && checkinDate && checkoutDate) {
  //     dispatch(
  //       fetchDetailHotel({
  //         hotelID: id,
  //         checkinDate: checkinDate,
  //         checkoutDate: checkoutDate,
  //       })
  //     );
  //   }
  //   if (id) {
  //     dispatch(getPhotoHotel(id));
  //   }
  // }, [id, checkinDate, checkoutDate]);

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
