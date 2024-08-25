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
import { FaLocationDot } from "react-icons/fa6";
import { BsHighlights } from "react-icons/bs";
import { fetchReviewScores } from "@/app/services/redux/slice/reviewScoresSlice";
import { fetchDescriptionHotel } from "@/app/services/redux/slice/descriptionHotelSlice";
import { Skeleton } from "@mui/material";
import InfoHotel from "../InfoHotel/InfoHotel";
import CarouselBooking from "../CarouselBooking/CarouselBooking";
import BookingDescription from "../BookingDescription/BookingDescription";
import { fetchRoomList } from "@/app/services/redux/slice/roomListSlice";
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
  const checkinDate = "2024-08-30";
  const checkoutDate = "2024-09-10";
  const adult = useAppSelector((state) => state.searchHotel.adult);
  const children = useAppSelector((state) => state.searchHotel.children);
  const room = useAppSelector((state) => state.searchHotel.room);
  const photo = useAppSelector((state) => state.photoHotelSlice.photo);
  const hotel: any = useAppSelector((state) => state.detailHotelSlice.hotel);
  const status = useAppSelector((state) => state.detailHotelSlice.status);
  const roomList: any = useAppSelector((state) => state.roomListSlice.roomList);
  const roomsRecommendation: any = useAppSelector(
    (state) => state.detailHotelSlice.roomsRecommendation
  );
  const reviewScores: any = useAppSelector(
    (state) => state.reviewScoresSlice.reviewScores
  );
  const descriptionHotel: any = useAppSelector(
    (state) => state.descriptionHotelSlice.desHotel
  );

  // const getIDRoom = roomList.map((item: any) => {
  //   return item.room_id;
  // });
  useEffect(() => {
    // if (
    //   (id && checkinDate && checkoutDate) ||
    //   (id && checkinDate && checkoutDate && adult && children && room) ||
    //   (id && checkinDate && checkoutDate && adult && room)
    // )

    if (id) {
      dispatch(
        fetchDetailHotel({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: 4,
          children: 2,
          room: 2,
        })
      );
    }
    if (id) {
      dispatch(getPhotoHotel(id));
      dispatch(fetchReviewScores(id));
      dispatch(fetchDescriptionHotel(id));
      dispatch(
        fetchRoomList({
          hotelID: id,
          checkinDate,
          checkoutDate,
          adult: 4,
          children: 2,
          room: 2,
        })
      );
    }
    // console.log(getIDRoom);
    // if (id && checkinDate && checkoutDate && adult && children && room)
  }, [id, checkinDate, checkoutDate]);

  return (
    <>
      {/* title hotel */}
      <InfoHotel
        status={status}
        hotelName={hotel?.hotel_name}
        hotelAddressLine={hotel?.hotel_address_line}
        hotelAccommodationTypeName={hotel?.accommodation_type_name}
        hotelHostSince={hotel?.host_profile?.host_since}
        hotelHostName={hotel?.host_name}
        hotelHostScores={hotel?.host_score}
        hotelHostScoreCount={hotel?.host_score_count}
        reviewScoresWord={reviewScores?.score_word}
        reviewScoresCount={reviewScores?.count}
        reviewScoresEnd={reviewScores?.score_end}
      />

      {/* img hotel */}
      <CarouselBooking status={status} photo={photo} />

      {/* description */}
      <BookingDescription
        descriptionHotel={descriptionHotel[0]?.description}
        hotelTopBenefits={hotel?.top_ufi_benefits}
        status={status}
        descriptionImportantHotel={descriptionHotel[1]?.description}
      />

      {/* recommendation */}
      <div className="ml-10 my-12 mx-4">
        <div className="rounded-xl shadow-lg bg-slate-300 px-10 py-5 w-full ">
          <div className="flex flex-col items-start justify-start space-y-3">
            <span className="text-2xl font-bold ">
              {hotel?.recommended_block_title}
            </span>
            <span className="text-lg">
              Type: {hotel?.accommodation_type_name}
            </span>
            <div className="flex flex-col items-start justify-start space-y-2">
              <div className="flex flex-row items-start justify-start"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotelDetail;
