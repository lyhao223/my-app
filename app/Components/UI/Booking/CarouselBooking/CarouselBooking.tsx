import { responsive } from "@/app/utils/carousel/ResponsiveCarousel";
import { Skeleton } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";

interface ICarouselBookingProps {
  photo: any;
  status: string;
}
const CarouselBooking = ({ photo, status }: ICarouselBookingProps) => {
  return (
    <>
      {status === "loading" ? (
        <Skeleton width={1440} height={956} />
      ) : (
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          showDots={true}
          arrows={true}
          autoPlay
          infinite
          itemClass="carousel-container py-12">
          {photo.map((item: any, index: number) => (
            <img
              key={index}
              src={item}
              className="w-80 mx-28 h-80 object-cover"
            />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CarouselBooking;
