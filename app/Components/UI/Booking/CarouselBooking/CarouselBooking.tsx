import { responsive } from "@/app/utils/carousel/ResponsiveCarousel";
import { Skeleton } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";

interface ICarouselBookingProps {
  photo: any;
  status: string;
}
const CarouselBooking = (
  { photo, status }: ICarouselBookingProps,
  props: { deviceType?: string }
) => {
  const { deviceType } = props;
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
          deviceType={deviceType}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite
          itemClass="carousel-container py-12 px-5 2xl:px-0 xl:px-0">
          {photo?.map((item: any, index: number) => (
            <img
              key={index}
              src={item}
              className="w-80 h-80 mx-0 2xl:mx-56 xl:mx-14 lg:mx-7  object-cover"
            />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CarouselBooking;
