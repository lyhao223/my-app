import React from "react";
import HeadingAbout from "../Components/UI/About/HeadingAbout";
import ImageAbout from "../Components/UI/About/ImageAbout";
import OurStory from "../Components/UI/About/OurStory";

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start space-y-10 mx-36">
      <HeadingAbout />
      <ImageAbout />
      <OurStory />
    </div>
  );
};

export default Page;
