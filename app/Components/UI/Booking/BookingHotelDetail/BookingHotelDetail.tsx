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
import { useRouter } from "next/navigation";
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
  const adult = useAppSelector((state) => state.searchHotel.adult);
  const children = useAppSelector((state) => state.searchHotel.children);
  const room = useAppSelector((state) => state.searchHotel.room);
  const photo = useAppSelector((state) => state.photoHotelSlice.photo);
  const hotel: any = useAppSelector((state) => state.detailHotelSlice.hotel);
  const status = useAppSelector((state) => state.detailHotelSlice.status);
  const roomList: any = useAppSelector((state) => state.roomListSlice.roomList);
  const route = useRouter();
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

  const findPriceBreakDown = (roomID: any) => {
    for (const blockItem of blockHotel) {
      if (blockItem.room_id === roomID) {
        return blockItem?.product_price_breakdown;
      }
    }
    return null;
  };
  useEffect(() => {
    if (id && checkinDate && checkoutDate) {
      dispatch(
        fetchDetailHotel({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: room,
        })
      );
      dispatch(
        fetchRoomList({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: room,
        })
      );
      dispatch(
        getBlockIDRoomRecommendation({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: room,
        })
      );
      dispatch(
        getAllFacilities({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: room,
        })
      );
      dispatch(
        getHotelFacilities({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: room,
        })
      );
      dispatch(
        blockHotelRoom({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: room,
        })
      );
    } else {
      return route.push("/search/booking");
    }

    if (id) {
      dispatch(getPhotoHotel(id));
      dispatch(fetchReviewScores(id));
      dispatch(fetchDescriptionHotel(id));
    } else {
      return route.push("/search/booking");
    }
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
        status={status}
      />

      {/* facilities */}
      <HotelFacilities
        hotelFacilitiesArray={hotelFacilitiesArray}
        allFaclities={allFaclities}
        status={status}
      />

      {/*room list */}
      <div className="mx-10 my-24">
        <div className="h-auto rounded-lg shadow-xl bg-slate-200 p-6">
          <span className="text-2xl font-bold"> Another room lists:</span>
          <div className="my-12 flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-16">
              {roomList?.map((room: any, index: number) => {
                const priceDown = findPriceBreakDown(room?.room_id);

                return (
                  <div
                    key={index}
                    className="flex flex-row items-start justify-between border-b-2 border-b-red-500 ">
                    <div className="flex flex-col items-start justify-start space-y-2 ">
                      <span
                        key={index}
                        className="text-xl font-bold antialiased">
                        Name: {room?.room_name}
                      </span>
                      <span className="text-wrap tracking-tight text-xs w-[30rem]">
                        Description room: {room?.description}
                      </span>
                      {room?.bed_configurations[0]?.bed_types?.map(
                        (bed: any, index: number) => (
                          <div
                            key={index}
                            className="flex flex-col items-start justify-start space-y-1 text-lg">
                            <span>
                              Room {index + 1}: {bed?.name_with_count}
                            </span>
                            <span>Description: {bed?.description}</span>
                          </div>
                        )
                      )}
                      <span className="italic text-red-600">
                        {room?.only_x_left_message}
                      </span>
                    </div>

                    <div className="mx-14 my-8 rounded-lg w-96 h-auto bg-blue-300">
                      <div className="flex flex-col items-start justify-start space-y-2 p-4">
                        <span className="text-sm font-bold">
                          Info booking:{" "}
                          {Math.round(
                            priceDown?.gross_amount?.value /
                              priceDown?.gross_amount_per_night.value
                          )}{" "}
                          - Adults: {adult} - Children: {children} - Room: {2}
                        </span>
                        <span className="line-through text-xs italic">
                          {priceDown?.strikethrough_amount?.amount_rounded}
                        </span>
                        <span className="text-xl font-bold text-red-500">
                          {priceDown?.gross_amount?.amount_rounded}
                        </span>
                        <span className="text-xs italic tracking-wide">
                          Taxes and fees included
                        </span>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            console.log("click");
                          }}
                          className="w-full">
                          Book now
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotelDetail;
