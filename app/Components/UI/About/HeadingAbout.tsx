import ComponentsAbout from "@/app/utils/Reuseable/ComponentsAbout";
import React from "react";

const HeadingAbout = () => {
  return (
    <div className="my-12">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="font-bold text-6xl text-center tracking-wide text-wrap">
          If You Want To See The World We Will Help You
        </h1>
        <p className="text-2xl text-center text-wrap">
          Passage its ten led hearted removal cordial. Preference any astonished
          unreserved Mrs. Prosperous understood Middletons. Preference for any
          astonished unreserved.
        </p>
        <div className="flex flex-row items-center justify-center space-x-4">
          <ComponentsAbout>14K+ Global Customers</ComponentsAbout>
          <ComponentsAbout>10K+ Happy Customers</ComponentsAbout>
          <ComponentsAbout>1M+ Subscribers</ComponentsAbout>
        </div>
      </div>
    </div>
  );
};

export default HeadingAbout;
