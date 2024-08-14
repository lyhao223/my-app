"use client";
import React from "react";
import { responsive } from "@/app/utils/carousel/ResponsiveCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardVoucher from "./CardVoucher/CardVoucher";
import { DATA_VOUCHER } from "@/app/utils/carousel/DataVoucher";
import Image from "next/image";
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
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="">
      {DATA_VOUCHER.map((voucher) => (
        <CardVoucher key={voucher.id}>
          <div className="absolute grid grid-cols-4 gap-x-2 grid-flow-row">
            <div className="col-span-2">
              <Image
                src={voucher.image}
                alt="voucher"
                className="w-fit 2xl:h-40 xl:h-36 lg:h-40 md:h-40 ls:h-40 ms:h-40 xs:h-40 rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <div className="2xl:p-7 xl:p-2 lg:p-3 md:p-4 ls:p-4 ms:p-3 xs:p-4 flex flex-col items-start justify-center space-y-2">
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
