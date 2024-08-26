"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import {
  fetchDetailHotel,
  fetchRoomsRecommendation,
} from "@/app/services/redux/slice/detailHotelSlice";
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
import { Button, Skeleton } from "@mui/material";
import InfoHotel from "../InfoHotel/InfoHotel";
import CarouselBooking from "../CarouselBooking/CarouselBooking";
import BookingDescription from "../BookingDescription/BookingDescription";
import {
  fetchRoomList,
  getBlockIDRoomRecommendation,
} from "@/app/services/redux/slice/roomListSlice";
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
    (state) => state.roomListSlice.recommendation
  );
  const reviewScores: any = useAppSelector(
    (state) => state.reviewScoresSlice.reviewScores
  );
  const descriptionHotel: any = useAppSelector(
    (state) => state.descriptionHotelSlice.desHotel
  );

  // const roomIDRecommendation = roomList?.room_list.map((room: any) =>
  //   room?.block_ids?.all_match.find(
  //     (id: any) => id === roomsRecommendation?.block_id
  //   )
  // );
  let ids: any = roomsRecommendation;
  useEffect(() => {
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
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: 4,
          children: 2,
          room: 2,
        })
      );
    }

    dispatch(
      getBlockIDRoomRecommendation({
        hotelID: id,
        checkinDate: checkinDate,
        checkoutDate: checkoutDate,
        adult: 4,
        children: 2,
        room: 2,
      })
    );
    console.log(ids);
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
        descriptionHotel={descriptionHotel && descriptionHotel[0]?.description}
        hotelTopBenefits={hotel?.top_ufi_benefits}
        status={status}
        descriptionImportantHotel={
          descriptionHotel && descriptionHotel[1]?.description
        }
      />

      {/* recommendation */}
      <div className="ml-10 my-12 mx-4">
        <div className="rounded-xl shadow-lg bg-slate-300 px-10 py-5 w-full ">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col items-start justify-start space-y-3">
              <span className="text-2xl font-bold ">
                {hotel?.recommended_block_title}
              </span>
              <span className="text-lg">
                Type: {hotel?.accommodation_type_name}
              </span>
              <div className="flex flex-col items-start justify-start space-y-2">
                <span>Check in date: {hotel?.arrival_date}</span>
                <span>Check out date: {hotel?.departure_date}</span>
              </div>
              <div className="flex flex-col items-start justify-start space-y-5">
                {roomsRecommendation &&
                  hotel?.rooms[
                    roomsRecommendation
                  ]?.bed_configurations[0]?.bed_types.map(
                    (bed: any, index: number) => (
                      <span className="text-lg" key={index}>
                        Room {index + 1}: {bed.count} x {bed.name} -
                        Description:
                        {bed.description}
                      </span>
                    )
                  )}
              </div>
            </div>
            <div className="my-8 rounded-lg w-96 h-auto bg-blue-300">
              <div className="flex flex-col items-start justify-start space-y-3 p-8">
                <span className="text-sm font-bold">
                  {Math.round(
                    hotel?.composite_price_breakdown
                      ?.gross_amount_hotel_currency?.value /
                      hotel?.composite_price_breakdown?.gross_amount_per_night
                        ?.value
                  )}{" "}
                  nights - Adutls: 4 - Children: 2 - Rooms: 2
                </span>
                <div className="flex flex-row items-center justify-center space-x-3">
                  <span className="text-sm text-red-600 font-medium line-through">
                    {
                      hotel?.composite_price_breakdown?.strikethrough_amount
                        ?.amount_rounded
                    }
                  </span>
                  <span className="text-lg font-bold">
                    {
                      hotel?.composite_price_breakdown
                        ?.gross_amount_hotel_currency?.amount_rounded
                    }
                  </span>
                </div>
                <span className="text-sm italic">Taxes and fees included</span>
                <Button variant="contained" color="primary" className="w-full">
                  Book now{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotelDetail;
