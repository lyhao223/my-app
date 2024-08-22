"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchDetailHotel } from "@/app/services/redux/slice/detailHotelSlice";
import { getPhotoHotel } from "@/app/services/redux/slice/fetchPhotoHotel";
import { responsive } from "@/app/utils/carousel/ResponsiveCarousel";
import { responsiveComment } from "@/app/utils/carousel/ResponsiveCommet";
import CardPhotoHotel from "@/app/utils/Reuseable/CardPhotoHotel";
import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IDetailBookingHotelProps {
  id: any;
  checkinDate?: string | any;
  checkoutDate?: string | any;
}
const BookingHotelDetail = ({ id }: IDetailBookingHotelProps) => {
  const dispatch = useAppDispatch();
  // const checkinDate = useAppSelector((state) => state.searchHotel.checkinDate);
  // const checkoutDate = useAppSelector(
  //   (state) => state.searchHotel.checkoutDate
  // );
  const checkinDate = "2024-08-24";
  const checkoutDate = "2024-08-29";
  const photo = useAppSelector((state) => state.photoHotelSlice.photo);
  const hotel: any = useAppSelector((state) => state.detailHotelSlice.hotel);
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
    <>
      {<span>{hotel?.hotel_name}</span>}
      <Carousel
        responsive={responsive}
        containerClass="px-16"
        showDots={true}
        arrows={true}
        autoPlay
        infinite
        itemClass="carousel-container py-12">
        {photo.map((item, index: number) => (
          <img key={index} src={item} className="w-80 h-80 object-cover" />
        ))}
      </Carousel>
    </>
  );
};

export default BookingHotelDetail;
