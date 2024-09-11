import React from "react";
import HeadingAbout from "../Components/UI/About/HeadingAbout";
import ImageAbout from "../Components/UI/About/ImageAbout";
import OurStory from "../Components/UI/About/OurStory";
import HotelAmenities from "../Components/UI/About/HotelAmenities";
import OurTeam from "../Components/UI/About/OurTeam";

const Page = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-10 2xl:mx-36 xl:mx-36 my-24">
      <HeadingAbout />
      <ImageAbout />
      <OurStory />
      <HotelAmenities />
      <OurTeam />
    </div>
  );
};

export default Page;
