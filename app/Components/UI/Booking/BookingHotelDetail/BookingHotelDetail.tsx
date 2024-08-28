"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { TiTickOutline } from "react-icons/ti";
import {
  fetchDetailHotel,
  fetchRoomsRecommendation,
  getAllFacilities,
  getHotelFacilities,
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
  blockHotelRoom,
  fetchRoomList,
  getBlockIDRoomRecommendation,
} from "@/app/services/redux/slice/roomListSlice";
import RecommendationRoom from "../RecommendationRoom/RecommendationRoom";
import HotelFacilities from "../HotelFacilities/HotelFacilities";
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
  // const checkinDate = "2024-08-30";
  // const checkoutDate = "2024-09-10";
  const adult = useAppSelector((state) => state.searchHotel.adult);
  const children = useAppSelector((state) => state.searchHotel.children);
  const room = useAppSelector((state) => state.searchHotel.room);
  const photo = useAppSelector((state) => state.photoHotelSlice.photo);
  const hotel: any = useAppSelector((state) => state.detailHotelSlice.hotel);
  const status = useAppSelector((state) => state.detailHotelSlice.status);
  const roomList: any = useAppSelector((state) => state.roomListSlice.roomList);
  const blockHotel: any = useAppSelector(
    (state) => state.roomListSlice.blockHotel
  );
  const hotelFacilities: any = useAppSelector(
    (state) => state.detailHotelSlice.hotelFacilities
  );
  const allFaclities: any = useAppSelector(
    (state) => state.detailHotelSlice.allFacilities
  );
  const roomsRecommendation: any = useAppSelector(
    (state) => state.roomListSlice.recommendation
  );
  const reviewScores: any = useAppSelector(
    (state) => state.reviewScoresSlice.reviewScores
  );
  const descriptionHotel: any = useAppSelector(
    (state) => state.descriptionHotelSlice.desHotel
  );

  let hotelFacilitiesArray =
    hotelFacilities && hotelFacilities.split(",").map(Number);
  useEffect(() => {
    if (id) {
      dispatch(
        fetchDetailHotel({
          hotelID: id,
          checkinDate: "2024-08-30",
          checkoutDate: "2024-09-10",
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
          checkinDate: "2024-08-30",
          checkoutDate: "2024-09-10",
          adult: 4,
          children: 2,
          room: 2,
        })
      );
    }

    dispatch(
      getBlockIDRoomRecommendation({
        hotelID: id,
        checkinDate: "2024-08-30",
        checkoutDate: "2024-09-10",
        adult: 4,
        children: 2,
        room: 2,
      })
    );
    if (id) {
      dispatch(
        getAllFacilities({
          hotelID: id,
          checkinDate: "2024-08-30",
          checkoutDate: "2024-09-10",
          adult: 4,
          children: 2,
          room: 2,
        })
      );
    }

    dispatch(
      getHotelFacilities({
        hotelID: id,
        checkinDate: "2024-08-30",
        checkoutDate: "2024-09-10",
        adult: 4,
        children: 2,
        room: 2,
      })
    );

    dispatch(
      blockHotelRoom({
        hotelID: id,
        checkinDate: "2024-08-30",
        checkoutDate: "2024-09-10",
        adult: 4,
        children: 2,
        room: 2,
      })
    );
  }, [id, checkinDate, checkoutDate, dispatch, adult, children, room]);

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

      <RecommendationRoom
        recommendationBlockTitle={hotel?.recommended_block_title}
        accommodationTypeName={hotel?.accommodation_type_name}
        arrivalDate={hotel?.arrival_date}
        departureDate={hotel?.departure_date}
        roomRecommendation={roomsRecommendation}
        hotelRoom={hotel?.rooms}
        grossAmountHotel={
          hotel?.composite_price_breakdown?.gross_amount_hotel_currency?.value
        }
        grossAmountPerNight={
          hotel?.composite_price_breakdown?.gross_amount_per_night?.value
        }
        strikeAmouth={
          hotel?.composite_price_breakdown?.strikethrough_amount?.amount_rounded
        }
        grossAmountHotelRounded={
          hotel?.composite_price_breakdown?.gross_amount_hotel_currency
            ?.amount_rounded
        }
      />

      {/* facilities */}
      <HotelFacilities
        hotelFacilitiesArray={hotelFacilitiesArray}
        allFaclities={allFaclities}
      />

      {/*room list */}
      <div className="mt-12 mx-8 px-4">
        <div className="h-auto rounded-lg shadow-xl bg-slate-200 p-10">
          <div className="flex flex-col items-start justify-start space-y-3">
            <span className="text-2xl font-bold"> Another room lists:</span>
            <div className="flex flex-col items-start justify-start space-y-5">
              {roomList?.map((room: any, index: number) => (
                <div className="flex flex-col items-start justify-start space-y-2">
                  <div className="flex flex-col items-start justify-start space-y-5 border-r-2 border-r-red-500">
                    <span key={index} className="text-lg">
                      Name: {room?.room_name}
                    </span>
                    <span className="w-96">
                      Description room: {room?.description}
                    </span>
                    {room?.bed_configurations[0]?.bed_types?.map(
                      (bed: any, index: number) => (
                        <div
                          key={index}
                          className="flex flex-col items-start justify-start">
                          <span>
                            Room {index + 1}: {bed?.name_with_count}
                          </span>
                          <span>Description: {bed?.description}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotelDetail;
