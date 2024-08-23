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
  const adult = useAppSelector((state) => state.searchHotel.adult);
  const children = useAppSelector((state) => state.searchHotel.children);
  const room = useAppSelector((state) => state.searchHotel.room);
  const photo = useAppSelector((state) => state.photoHotelSlice.photo);
  const hotel: any = useAppSelector((state) => state.detailHotelSlice.hotel);
  const reviewScores: any = useAppSelector(
    (state) => state.reviewScoresSlice.reviewScores
  );
  const descriptionHotel: any = useAppSelector(
    (state) => state.descriptionHotelSlice.desHotel
  );
  useEffect(() => {
    if (id && checkinDate && checkoutDate) {
      console.log("child", children);
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
    }
    console.log("hotel", hotel);
  }, [id, checkinDate, checkoutDate]);

  return (
    <>
      <div className="ml-10 flex flex-row items-start justify-between">
        <div className="flex flex-col items-start justify-start space-y-5">
          <span className="text-2xl font-semibold">{hotel?.hotel_name}</span>
          <div className="flex flex-row items-start justify-start space-x-2">
            <FaLocationDot className="text-red-500" />
            <span className="text-lg font-medium">
              {hotel?.hotel_address_line}.
            </span>
          </div>
          <span className="text-lg font-medium">
            Accommodation: {hotel?.accommodation_type_name}.
          </span>
          <span className="text-sm italic">
            {hotel?.host_profile?.host_since}
          </span>
        </div>
        <div className="rounded-lg shadow-lg w-44 h-16">
          <div className="mx-2 my-2 flex flex-row items-start justify-end space-x-5">
            <div className="flex flex-col items-start justify-start text-sm font-bold">
              <span>{reviewScores?.score_word}</span>
              <span>{reviewScores?.count} reviews</span>
            </div>
            <div className="py-3 rounded-lg w-12 h-12 bg-blue-500 ">
              <span className="text-white mx-2 font-bold">
                {reviewScores?.score_end}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        showDots={true}
        arrows={true}
        autoPlay
        infinite
        itemClass="carousel-container py-12">
        {photo.map((item, index: number) => (
          <img
            key={index}
            src={item}
            className="w-80 mx-28 h-80 object-cover"
          />
        ))}
      </Carousel>

      <div className="ml-10 flex flex-row items-start justify-between">
        <div className="flex flex-col items-start justify-start space-y-7">
          <div className="flex flex-col items-start justify-start space-y-5">
            <span className="text-2xl font-semibold">Description</span>
            <span className="text-sm font-extralight w-[65rem] text-start">
              {descriptionHotel[1]?.description}
            </span>
          </div>
          {descriptionHotel[0]?.description && (
            <div className="flex flex-col items-start justify-start space-y-5">
              <span className="text-2xl font-semibold">Important</span>
              <span className="text-sm font-medium w-[65rem] text-start">
                {descriptionHotel[0]?.description}
              </span>
            </div>
          )}
        </div>
        <div className="rounded-lg w-auto h-auto bg-slate-300">
          <div className="flex flex-col items-start justify-start space-y-5 px-4 py-5">
            <div className="flex flex-row items-center justify-start space-x-4">
              <BsHighlights className="text-blue-500 text-xl" />
              <span className="text-xl font-medium">Highlights:</span>
            </div>
            <ul className="px-8">
              {hotel?.top_ufi_benefits.map((item: any) => (
                <li className="list-disc" key={item.icon}>
                  {item?.translated_name}
                </li>
              ))}
            </ul>
            {/* <span>{hotel?.data?.top_ufi_benefits?.translated_name}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotelDetail;
