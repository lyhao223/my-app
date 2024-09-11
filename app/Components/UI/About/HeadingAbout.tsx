import ComponentsAbout from "@/app/utils/Reuseable/ComponentsAbout";
import React from "react";

const HeadingAbout = () => {
  return (
    <div className=" my-8 2xl:my-12 xl:my-12">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="font-bold text-3xl 2xl:text-6xl xl:text-6xl text-center tracking-wide text-wrap">
          If You Want To See The World We Will Help You
        </h1>
        <p className="text-lg 2xl:text-2xl xl:text-2xl text-center text-wrap">
          Passage its ten led hearted removal cordial. Preference any astonished
          unreserved Mrs. Prosperous understood Middletons. Preference for any
          astonished unreserved.
        </p>
        <div className="flex flex-col space-x-0 space-y-4 2xl:flex-row xl:flex-row items-center justify-center 2xl:space-x-4 2xl:space-y-0 xl:space-x-4 xl:space-y-0">
          <ComponentsAbout>14K+ Global Customers</ComponentsAbout>
          <ComponentsAbout>10K+ Happy Customers</ComponentsAbout>
          <ComponentsAbout>1M+ Subscribers</ComponentsAbout>
        </div>
      </div>
    </div>
  );
};

export default HeadingAbout;
