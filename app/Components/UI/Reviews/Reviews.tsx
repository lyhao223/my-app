"use client";
import Image from "next/image";
import React from "react";
import r1 from "@/assets/reviews/r1.jpg";
import i1 from "@/assets/icons/i1.svg";
import Comment from "@/app/utils/Reuseable/Comment";
import Carousel from "react-multi-carousel";
import { responsiveComment } from "@/app/utils/carousel/ResponsiveCommet";
import r2 from "@/assets/reviews/r2.jpg";
import i2 from "@/assets/icons/i2.svg";
const Reviews = (props: { deviceType?: string }) => {
  const { deviceType } = props;
  return (
    <Carousel
      responsive={responsiveComment}
      showDots={false}
      itemClass="px-9"
      deviceType={deviceType}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      infinite>
      <Comment
        image={r1.src}
        iconImage={i1.src}
        comment="Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing"
        name="John Doe"
        position="Ceo of Apple"
      />
      <Comment
        image={r2.src}
        iconImage={i2.src}
        comment="Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. understood the Preference unreserved."
        name="Carolyn Ortiz"
        position="Ceo of Google"
      />
    </Carousel>
  );
};

export default Reviews;
