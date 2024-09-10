import React from "react";
import image1 from "@/assets/about/1.jpg";
import image2 from "@/assets/about/2.jpg";
import image3 from "@/assets/about/3.jpg";

const ImageAbout = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-10">
      <div className="col-span-3 flex items-center justify-center">
        <img
          src={image1?.src}
          alt="image1"
          className="max-w-full object-cover h-auto rounded-lg"
        />
      </div>
      <div className="col-span-2 flex flex-col space-y-5">
        <img
          src={image2?.src}
          alt="image1"
          className="max-w-full h-auto rounded-lg"
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
