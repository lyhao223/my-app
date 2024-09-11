import React from "react";
import image1 from "@/assets/about/1.jpg";
import image2 from "@/assets/about/2.jpg";
import image3 from "@/assets/about/3.jpg";

const ImageAbout = () => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 gap-4 p-10">
      <div className="2xl:col-span-3 xl:col-span-3 flex 2xl:items-center 2xl:justify-center xl:items-center xl:justify-center">
        <img
          src={image1?.src}
          alt="image1"
          className="max-w-full object-cover h-auto rounded-lg"
        />
      </div>
      <div className="2xl:col-span-2 xl:col-span-2 flex flex-col space-y-5">
        <img
          src={image2?.src}
          alt="image1"
          className="max-w-full h-auto rounded-lg 2xl:mx-12 xl:mx-12 mx-0"
        />
        <img
          src={image3?.src}
          alt="image1"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageAbout;
