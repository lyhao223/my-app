"use client";
import React from "react";
import { responsive } from "@/app/utils/carousel/ResponsiveCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardVoucher from "./CardVoucher/CardVoucher";
import { DATA_VOUCHER } from "@/app/utils/carousel/DataVoucher";
import Image from "next/image";
import { duration } from "@mui/material";
const TourVoucher = (props: { deviceType?: string }) => {
  const { deviceType } = props;
  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      showDots={true}
      infinite={true}
      className="p-1"
      autoPlay
      containerClass="py-9"
      deviceType={deviceType}
      removeArrowOnDeviceType={["tablet", "mobile"]}>
      {DATA_VOUCHER.map((voucher) => (
        <CardVoucher key={voucher.id}>
          <div className="absolute grid grid-cols-4 gap-x-2 grid-flow-row">
            <div className="col-span-2">
              <Image
                src={voucher.image}
                alt="voucher"
                className="w-fit h-40 rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <div className="p-7 flex flex-col items-start justify-center space-y-2">
                <span className="text-black font-bold text-lg">
                  {voucher.title}
                </span>
                <span className="text-black text-sm">
                  {voucher.description}
                </span>
              </div>
            </div>
          </div>
        </CardVoucher>
      ))}
    </Carousel>
  );
};

export default TourVoucher;
