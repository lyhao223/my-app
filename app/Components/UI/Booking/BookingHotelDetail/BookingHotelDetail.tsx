"use client";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import {
  fetchDetailHotel,
  getAllFacilities,
  getHotelFacilities,
} from "@/app/services/redux/slice/detailHotelSlice";
import { getPhotoHotel } from "@/app/services/redux/slice/fetchPhotoHotel";
import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { fetchReviewScores } from "@/app/services/redux/slice/reviewScoresSlice";
import { fetchDescriptionHotel } from "@/app/services/redux/slice/descriptionHotelSlice";
import { Button } from "@mui/material";
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
import RoomList from "../RoomList/RoomList";
interface IDetailBookingHotelProps {
  id: any;
  checkinDate?: string | any;
  checkoutDate?: string | any;
}
const BookingHotelDetail = ({ id }: IDetailBookingHotelProps) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  let checkinDate = useAppSelector((state) => state.searchHotel.checkinDate);
  let checkoutDate = useAppSelector((state) => state.searchHotel.checkoutDate);
  let adult: any = useAppSelector((state) => state.searchHotel.adult);
  let children: any = useAppSelector((state) => state.searchHotel.children);
  let roomChoose: any = useAppSelector((state) => state.searchHotel.room);
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
    // Save values to localStorage when they are available
    if (id && checkinDate && checkoutDate && adult && children && roomChoose) {
      localStorage.setItem("hotelId", id);
      localStorage.setItem("checkinDate", checkinDate);
      localStorage.setItem("checkoutDate", checkoutDate);
      localStorage.setItem("adult", adult);
      localStorage.setItem("children", children);
      localStorage.setItem("roomChoose", roomChoose);
      setLoading(false);
    } else {
      // Retrieve values from localStorage on component mount
      const storedId = localStorage.getItem("hotelId");
      const storedCheckinDate = localStorage.getItem("checkinDate");
      const storedCheckoutDate = localStorage.getItem("checkoutDate");
      const storedAdult = localStorage.getItem("adult");
      const storedChildren = localStorage.getItem("children");
      const storedRoomChoose = localStorage.getItem("roomChoose");

      if (storedId && storedCheckinDate && storedCheckoutDate) {
        id = storedId;
        checkinDate = storedCheckinDate;
        checkoutDate = storedCheckoutDate;
        adult = storedAdult;
        children = storedChildren;
        roomChoose = storedRoomChoose;
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [id, checkinDate, checkoutDate, adult, children, roomChoose]);

  useEffect(() => {
    if (id && checkinDate && checkoutDate) {
      dispatch(
        fetchDetailHotel({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: roomChoose,
        })
      );
      dispatch(
        fetchRoomList({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: roomChoose,
        })
      );
      dispatch(
        getBlockIDRoomRecommendation({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: roomChoose,
        })
      );
      dispatch(
        getAllFacilities({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: roomChoose,
        })
      );
      dispatch(
        getHotelFacilities({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: roomChoose,
        })
      );
      dispatch(
        blockHotelRoom({
          hotelID: id,
          checkinDate: checkinDate,
          checkoutDate: checkoutDate,
          adult: adult,
          children: children,
          room: roomChoose,
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
  }, [id, checkinDate, checkoutDate, dispatch, adult, children, roomChoose]);

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
        id={id}
      />
      {/* facilities */}
      <HotelFacilities
        hotelFacilitiesArray={hotelFacilitiesArray}
        allFaclities={allFaclities}
        status={status}
      />
      {/*room list */}
      <RoomList
        roomList={roomList}
        adult={adult}
        child={children}
        roomChoose={roomChoose}
        findPriceBreakDown={findPriceBreakDown}
      />
    </>
  );
};

export default BookingHotelDetail;
